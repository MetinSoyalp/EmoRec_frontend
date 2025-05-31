import { useState, useEffect } from "react";
import "./RegisterUserPage.css";
import { Movie } from "../../types/Movie";
import { User } from "../../types/User";
import { registerUser } from "../../apis/user";
import { getAllMovies } from "../../apis/movie";
import { useNavigate } from "react-router-dom";

interface RegisterUserDTO {
    Name: string;
    FavoriteMovie1: string;
    FavoriteMovie2: string;
    FavoriteMovie3: string;
}

function RegisterUserPage() {
    const [formData, setFormData] = useState<RegisterUserDTO>({
        Name: "",
        FavoriteMovie1: "",
        FavoriteMovie2: "",
        FavoriteMovie3: "",
    });
    const [logged, setLogged] = useState<boolean>(false);
    const [allMovies, setAllMoives] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect( () => {

        document.title = `EmoRec - Register`;

        const stored = localStorage.getItem('mockUserId');
        if (stored) setLogged(true);
        else{
            getAllMovies()
                .then((movies) => {
                    setAllMoives(movies);
                })
                .catch((err) => console.error("Failed to fetch movie:", err))
                .finally(() => setLoading(false));
        }
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
        ) => {
            const { name, value } = e.target;
            setFormData((prev) => ({
                ...prev,
                [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const user: User | null = await registerUser(formData);

            if (user) {
            alert("User registered successfully!");
            setFormData({
                Name: "",
                FavoriteMovie1: "",
                FavoriteMovie2: "",
                FavoriteMovie3: "",
            });
            navigate("/login");
            } else {
            alert("Registration failed. User not returned.");
            }
        } catch (error) {
            console.error("Registration error:", error);
            alert("An error occurred during registration.");
        }
    };

    if (logged) navigate("/");

    if (loading) return <div>Loading...</div>;

    return (
    <div className="register-form-container">
        <h2>Register User</h2>
        <form onSubmit={handleSubmit} className="register-form">
        <label>
            Name:
            <input type="text" name="Name" value={formData.Name} onChange={handleChange} required />
        </label>

        <label>
            Favorite Movie 1:
            <select name="FavoriteMovie1" value={formData.FavoriteMovie1} onChange={handleChange} required>
            <option value="" disabled>Select a movie</option>
            {allMovies.map((movie, idx) => (
                <option key={idx} value={movie.MovieID}>{movie.MovieName}</option>
            ))}
            </select>
        </label>

        <label>
            Favorite Movie 2:
            <select name="FavoriteMovie2" value={formData.FavoriteMovie2} onChange={handleChange} required>
            <option value="" disabled>Select a movie</option>
            {allMovies.map((movie, idx) => (
                <option key={idx} value={movie.MovieID}>{movie.MovieName}</option>
            ))}
            </select>
        </label>

        <label>
            Favorite Movie 3:
            <select name="FavoriteMovie3" value={formData.FavoriteMovie3} onChange={handleChange} required>
            <option value="" disabled>Select a movie</option>
            {allMovies.map((movie, idx) => (
                <option key={idx} value={movie.MovieID}>{movie.MovieName}</option>
            ))}
            </select>
        </label>

        <button type="submit">Register</button>
        </form>
    </div>
    );
}

export default RegisterUserPage;