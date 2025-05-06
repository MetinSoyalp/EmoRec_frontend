import "./Navbar.css";

function Navbar(){ //TODO: Improve later
    return <div className="div-Navbar">
        <ul className="navbar">
            <li className="navItem"> <img src="/potato.ico" alt="eeee" /> </li>
            <li className="navItem"> <a href="/" className="navLink">Home</a> </li>
            <li className="navItem"> <a href="/" className="navLink">Movies</a> </li>
            <li className="navItem"> <a href="/" className="navLink">About Us</a> </li>
            <div>
                <li className="navLogin"> <a href="/" className="navLink">Login</a> </li>
            </div>
        </ul>
    </div>
};

export default Navbar;