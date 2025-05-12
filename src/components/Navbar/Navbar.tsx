import { useNavigate } from 'react-router-dom';
import "./Navbar.css";
//import { Link } from "react-router-dom"; //Daha sonrası için

interface HotbarProps {
  userId: string | null;
  setUserId: (id: string | null) => void;
}

function Navbar({ userId, setUserId }: HotbarProps){ //TODO: Improve later
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('mockUserId');
        setUserId(null);
        navigate("/");
    }; // <button onClick={handleLogout} className="navButton">Logout</button>

    return <div className="div-Navbar">
        <ul className="navbar">
            <li className="navItem"> <img src="/potato.ico" alt="eeee" /> </li>
            <li className="navItem"> <a href="/" className="navLink">Home</a> </li>
            <li className="navItem"> <a href="/movie_list" className="navLink">Movies</a> </li>
            <li className="navItem"> <a href="/about_us" className="navLink">About Us</a> </li>
            <li className="navLogin">
                {
                    userId ?
                    <>
                        <a href="/" className="navLink">Profile</a>
                        <button onClick={handleLogout} className="navButton">Logout</button>
                    </> //Logged In
                    :
                    <>
                        <a href="/login" className="navLink">Login</a>
                    </> //Not Logged In
                }
            </li>
        </ul>
    </div>
};

export default Navbar;