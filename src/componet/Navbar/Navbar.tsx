import { useState } from "react";
import NavLinks from "./NavLinks";
import PrimaryButton from "../Utilities/Buttons";
import { IoMenu, IoClose } from "react-icons/io5";
import { MdLightMode, MdNightlightRound } from "react-icons/md";
import Countainer from "../Utilities/Countainer";
const Navbar = () => {
    const [open, setOpen] = useState(false);
    var [isDark, setIsDark] = useState(false);
    function toggleTheme() {
        setIsDark(!isDark);
        document.documentElement.className = isDark ? 'light' : 'dark';;
    }
    return (
        <nav className="flex items-center justify-center bg-white/70 dark:bg-slate-900/90 dark:text-white backdrop-blur sticky">
            <Countainer className="flex justify-between items-center my-2">
                <div className="z-50 p-1 md:w-auto flex justify-between w-[100%]">
                    <img src='/assets/images/main.svg' alt="logo" className="md:cursor-pointer h-9" />
                    <div className="text-4xl md:hidden" onClick={() => setOpen(!open)}>
                        {open ? <IoClose /> : <IoMenu />}
                    </div>
                </div>
                <ul className="md:flex hidden flex-auto  justify-end items-center w-auto">

                    <NavLinks onChangeOpen={setOpen}/>
                </ul>
                <div className="md:block hidden">
                    <PrimaryButton>Jobs</PrimaryButton>
                </div>
                {/* <div className="nav-social flex gap-3">
                    <a href="http://" target="_blank" rel="noopener noreferrer"><TiSocialFacebook /></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><i><TiSocialTwitter /></i></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><i><TiSocialInstagram /></i></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><i><TiSocialLinkedin /></i></a>
                </div> */}
                <button onClick={toggleTheme} className="dark:bg-white dark:text-gray-dark opacity-7 bg-gray-dark text-white p-2 rounded-lg md:ms-3 m-0">
                    {isDark ? <MdLightMode /> : <MdNightlightRound />}
                </button>
                {/* Mobile nav */}
                <ul
                    className={`
                    z-20
                    h-dvh
                    dark:bg-slate-900
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
                >

                    <NavLinks onChangeOpen={setOpen}/>

                    <div className="py-5">
                        <PrimaryButton>Get started</PrimaryButton>
                    </div>
                </ul>
            </Countainer>
        </nav>
    );
};

export default Navbar;