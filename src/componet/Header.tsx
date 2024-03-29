import PrimaryButton from "./Utilities/Buttons";
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";
import { MdLightMode } from "react-icons/md";
import { MdNightlightRound } from "react-icons/md";
import { useState } from "react";
import { logo } from "../data";
function Header() {
    var [isDark, setIsDark] = useState(false);
    function toggleTheme() {
        setIsDark(!isDark);
        document.documentElement.className = isDark ? 'light' : 'dark';;
    }
    return <header className="flex justify-center items-center">
        <div className="flex w-[80%] justify-center items-center my-3">
            <div className="logo w-[300px]"><img src={logo} alt="" /></div>
            <nav className="flex-auto flex gap-6  justify-end items-center">
                <li>Home</li>
                <li>About</li>
                <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"
                >Services
                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>
                <div id="dropdownDivider" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" className="bloresponsivenessck px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                        </li>
                    </ul>
                    <div className="py-2">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
                    </div>
                </div>
                <li>Media</li>
                <li>careers</li>
                <li>Contact Us</li>
                <li><PrimaryButton><a href="">Jobs</a></PrimaryButton></li>
                <div className="nav-social flex gap-3">
                    <a href="http://" target="_blank" rel="noopener noreferrer"><TiSocialFacebook /></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><i><TiSocialTwitter/></i></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><i><TiSocialInstagram/></i></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><i><TiSocialLinkedin/></i></a>
                </div>
                <button onClick={toggleTheme}>
                    { isDark ? <MdLightMode /> : <MdNightlightRound/> }
                   
                </button>
            </nav>
        </div>
    </header>
}

export default Header;