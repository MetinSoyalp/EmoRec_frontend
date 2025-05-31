import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css";
import { User } from '../../types/User';
//import { Link } from "react-router-dom"; //Daha sonrası için

interface HotbarProps {
  userId: string | null;
  setUserId: (id: string | null) => void;
  setUser: (user: User | null) => void;
}

function Navbar({ userId, setUserId, setUser }: HotbarProps){ //TODO: Improve later
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('mockUserId');
        setUserId(null);
        setUser(null);
        navigate("/");
        window.location.reload(); //To update interface
    }; // <button onClick={handleLogout} className="navButton">Logout</button>

    return <div className="div-Navbar">
        <ul className="navbar">
            <li className="navItem"> <img src="/potato.ico" alt="eeee" /> </li>
            <li className="navItem"> <Link to="/" className="navLink">Home</Link> </li>
            <li className="navItem"> <Link to="/movie_list" className="navLink">Movies</Link> </li>
            <li className="navItem"> <Link to="/about_us" className="navLink">About Us</Link> </li>
            <li className="navLogin">
                {
                    userId ?
                    <>
                        <Link to="/profile" className="navLink">Profile</Link>
                        <button onClick={handleLogout} className="navButton">Logout</button>
                    </> //Logged In
                    :
                    <>
                        <Link to="/login" className="navLink">Login</Link>
                    </> //Not Logged In
                }
            </li>
        </ul>
    </div>
};

export default Navbar;