import { Button } from "./ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "./ui/label"
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom";
type Inputs = {
    email: string
}
const Subscribe = () => {
    let navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        mode: "onSubmit",
    })
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        if (data.email) {
            return navigate("/success", { state: data.email });

        }
    }


    return (
        <div className="pt-7">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 items-start">
                <div className="flex justify-between w-full">
                    <Label htmlFor="email" className="text-xs font-bold">Email address</Label>
                    {errors.email && <span className="text-xs text-accent">{errors.email.message}</span>}
                </div>

                <Input defaultValue={""}  {...register("email", {

                    pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Valid email required",
                    },
                })} id="email" placeholder="email@company.com" className={`${errors.email && "border-accent text-accent"} `} />

                <Button type="submit" className="w-full mt-3 hover:bg-gradient-to-r from-accent/70 to-accent hover:font-bold" size={"lg"}>Subscribe to monthly newsletter</Button>
            </form>
        </div>
    )
}

export default Subscribe