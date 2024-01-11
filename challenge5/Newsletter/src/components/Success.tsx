import { useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Success = () => {
    let navigate = useNavigate();

    const { state } = useLocation();
    console.log(state);

    return (
        <div className="sm:bg-white sm:rounded-3xl sm:h-96 sm:w-96 sm:p-10 sm:justify-center flex flex-col justify-between h-full ">
            <div className="w-72 space-y-4 sm:space-y-3 mt-20 text-left">
                <img src="/images/icon-success.svg" />
                <p className="text-3xl font-bold text-left text-primary">thanks for subscribing!</p>
                <p>a confirmation email has been sent to <span className="font-bold">{state}</span>. please open it and click the button inside to confirm your subscription</p>
            </div>
            <div className="flex justify-center mb-20">
                <Button className="w-full mt-3 hover:bg-gradient-to-r from-accent/70 to-accent hover:font-bold" size={"lg"} onClick={() => navigate(-1)}>Dismiss message</Button>
            </div>
        </div>
    )
}

export default Success