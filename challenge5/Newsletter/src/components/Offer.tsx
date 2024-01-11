import { Checkbox } from "./ui/checkbox"

const Offer = ({ text }: { text: string }) => {
    return (
        <div className="flex justify-start text-left">
            <Checkbox checked={true} className="mt-1" />
            <p className="ml-3">{text}</p>
        </div>
    )
}

export default Offer