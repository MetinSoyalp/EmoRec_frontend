import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./LoginPage.css"
import { getUserInfo } from '../../apis/user';

type LoginProps = {
    onLogin: (userId: string) => void;
};

function LoginPage({ onLogin }: LoginProps) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === password) {
            getUserInfo(username).then( result => {
                if( result == null ){ //If user does not exist inside database
                    alert("User does not exist")
                } else{
                    onLogin(username);
                    localStorage.setItem('mockUserId', username); // Store user in localStorage
                    navigate('/');
                    window.location.reload();
                }
            } )        
        } else {
            alert('Username and password must match (mock condition)');
        }
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    type="text"
                    placeholder="Username, ex: ss0000002"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="login-input"
                    required
                />
                <input
                    type="password"
                    placeholder="Password, ex: ss0000002"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="login-input"
                    required
                />
                <button type="submit" className="login-button">
                    Login
                </button>
            </form>
            <p className="login-register-text">
                Don't have an account? <Link to="/register" className="login-register-link">Register here</Link>
            </p>
        </div>
    );
}

export default LoginPage;