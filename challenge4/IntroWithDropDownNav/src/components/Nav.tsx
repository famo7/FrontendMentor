import { useState } from "react";
import Drawer from "./ui/drawer";
import NavMenu from "./NavMenu";

const Nav = ({ style }: { style: string }) => {
    const [clicked, setClicked] = useState(false)
    return (
        <div className={`${style}`}>
            <div className="flex justify-between w-full">
                <img src="images/logo.svg" alt="logo" className="sm:hidden" />
                <img src="images/icon-menu.svg" alt="menu" className={`${clicked ? "hidden" : "block"} sm:hidden `} onClick={() => setClicked(!clicked)} />
            </div>
            <div className="hidden sm:block">
                <NavMenu>
                    <img src="images/logo.svg" alt="logo" className="" />
                </NavMenu>
            </div>
            <div className="sm:hidden">
                <Drawer isOpen={clicked} setIsOpen={setClicked}>
                    <div className="flex justify-center mt-5 ml-10">
                        <img src="images/icon-close-menu.svg" alt="close menu" className={`${!clicked ? "hidden" : "block"} `} onClick={() => setClicked(!clicked)} />
                    </div>
                    <div>
                        <NavMenu>{null}</NavMenu>
                    </div>
                </Drawer>
            </div>

        </div >
    )
}

export default Nav