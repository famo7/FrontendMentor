import { ChevronUp, ChevronDown } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/button"



const MenuItemDrodown = ({ text, children }: { text: string, children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="">
            <Button className="text-gray-600 hover:text-black text-sm" variant={"secondary"} onClick={() => setIsOpen(!isOpen)}>{text} {isOpen ? <ChevronUp /> : <ChevronDown />}</Button>

            {isOpen && <div >
                {children}
            </div>}
        </div>
    )
}

const ItemWithIcon = ({ text, icon }: { text: string, icon: string }) => {
    return (<div className="flex justify-start gap-3 ml-12 mt-2">
        <img src={icon} className="h-5" alt="icon" />
        <a href="#" className="text-gray-600 hover:text-black text-sm mb-2" >{text}</a>
    </div>)
}

export default function NavMenu ({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col items-start sm:w-[1440px] sm:flex sm:flex-row sm:justify-around sm:relative sm:items-center">
            <div className="sm:flex sm:gap-10 sm:relative">
                <div className="mt-3">
                    {children}
                </div>
                <MenuItemDrodown text="Features">
                    <div className="sm:absolute">
                        <ItemWithIcon text="Todo List" icon={"images/icon-todo.svg"} />
                        <ItemWithIcon text={"Calendar"} icon={"images/icon-calendar.svg"} />

                        <ItemWithIcon text="Reminders" icon="images/icon-reminders.svg" />
                        <ItemWithIcon text="Planning" icon="images/icon-planning.svg" />
                    </div>
                </MenuItemDrodown>
                <MenuItemDrodown text="Company">
                    <div className="flex flex-col items-start gap-3 ml-12 mt-2 sm:absolute">
                        <a href="#" className="text-gray-600 hover:text-black text-sm mb-2">History</a>
                        <a href="#" className="text-gray-600 hover:text-black text-sm mb-2">Our Team</a>
                        <a href="#" className="text-gray-600 hover:text-black text-sm mb-2">Blog</a>
                    </div>
                </MenuItemDrodown>
                <div className="flex flex-col items-start mt-3 ml-4 sm:flex sm:flex-row ">
                    <a href="#" className="text-gray-600 hover:text-black mb-5 text-sm">Careers</a>
                    <a href="#" className="text-gray-600 hover:text-black text-sm">About</a>
                </div>
            </div>
            <div className="flex flex-col items-center mt-5 ml-12 sm:flex sm:flex-row sm:items-center">

                <Button variant={"secondary"} className="text-gray-600 hover:text-black mb-2" size={"lg"} >Login</Button>

                <Button variant="outline" size={"lg"} className="w-full text-gray-600 border-2 border-gray-400 hover:border-2 hover:border-gray-900 hover:bg-white hover:text-black" >Register</Button>
            </div>
        </div>
    )
}

