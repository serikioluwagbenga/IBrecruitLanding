import PrimaryButton from "./Buttons";

function Header() {
    return <header className="flex justify-center items-center">
        <div className="flex w-[80%] justify-center items-center my-3">
            <div className="logo w-[300px]"><img src="/assets/images/main.svg" alt="" /></div>
            <nav className="flex-auto flex gap-6  justify-end items-center">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Media</li>
                <li>careers</li>
                <li>Contact Us</li>
                <li><PrimaryButton><a href="">Jobs</a></PrimaryButton></li>
                <div className="nav-social flex gap-3">
                    <a href="http://" target="_blank" rel="noopener noreferrer"><i>f</i></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><i>T</i></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><i>I</i></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><i>Li</i></a>
                </div>
                <button onClick={toggleTheme}>Light</button>
            </nav>
        </div>
    </header>
}
function toggleTheme() {
    document.documentElement.classList.toggle("dark");
}


export default Header;