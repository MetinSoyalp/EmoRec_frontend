import { useEffect, useMemo, useState } from "react";
import { User, WatchedMovie } from "../../types/User";
import { MovieRecommend } from "../../types/Movie";
import MovieRecommendSlider from "../../components/MovieRecommendSlider/MovieRecommendSlider";
import { userMovieRecommendation, userUserRecommendation } from "../../apis/user";
import { getAllGenres } from "../../apis/genres";
import EmotionVector from "../../components/EmotionVector/EmotionVector";
import GenresVector from "../../components/GenresVector/GenresVecotr";
import "./ProfilePage.css"
import HistoryMovie from "../../components/HistoryMovie/HistoryMovie";

type ProfileProps = {
    user: User;
};

function ProfilePage({ user }: ProfileProps) {
    const [genresNameList, setGenresNameList] = useState<string[]>([]);
    const [recommendList_UserMovie, setRecommendList_UserMovie] = useState<MovieRecommend[]>([]);
    const [recommendList_UserUser, setRecommendList_UserUser] = useState<MovieRecommend[]>([]);
    const [loading, setLoading] = useState(true);

    // Memoized sorted history
    const movieHistoryList = useMemo(() => {
        return [...user.WatchedMovies].sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
    }, [user.WatchedMovies]);

    useEffect( () => {
        document.title = `EmoRec - Profile`;

        Promise.all([
            getAllGenres(),
            userMovieRecommendation(user.UserID),
            userUserRecommendation(user.UserID),
        ])
        .then(([genList, recList_UserMovie, recList_UserUser]) => {
            setGenresNameList(genList);
            setRecommendList_UserMovie(recList_UserMovie);
            setRecommendList_UserUser(recList_UserUser);
        })
        .catch(err => {
            console.error("Failed to load profile data:", err);
        })
        .finally(() => setLoading(false));

    }, [user] );

    if (loading) return <div>Loading...</div>;

    return (
    <main>
        <div className="user-profile">
            <h1>{user.Name}</h1>
            <HistoryMovie historyList={movieHistoryList} />
            <GenresVector genresNames={genresNameList} genresVector={user.U_GenreVector}/>
            <EmotionVector emotionVector={user.U_EmotionVector} />
            <MovieRecommendSlider recommendList={recommendList_UserMovie} title="Movies you may like"/>
            <MovieRecommendSlider recommendList={recommendList_UserUser} title="Recommended by Viewers Who Share Your Taste"/>
        </div>
    </main>
    )

}

export default ProfilePage;