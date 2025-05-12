import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./LoginPage.css"

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
            onLogin(username);
            localStorage.setItem('mockUserId', username); // Store user in localStorage
            navigate('/');
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
        </div>
    );
}

export default LoginPage;