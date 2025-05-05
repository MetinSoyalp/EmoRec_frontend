import { Movie, MovieRecommend } from "../types/Movie";
import api from "./axios.ts";

export const findMovieById = async (movieID: string): Promise<Movie> => { //Tested - partially
    const res = await api.get<Movie>(`movie/${movieID}`);
    return res.data;
}

// List of Movie döndürüyör
export const getMoviePaginated = async (page: number): Promise<Movie[]> => { //Not tested
    const res = await api.get<Movie[]>(`list?page=${page}&limit=10`);
    return res.data;
}

// calculate_genres_vectors - belki
// No return

// calculate_emo_vectors - belki
// No return

// List of MovieRecommend döndürüyör
export const movieToMovieRecommend = async (movieID: string): Promise<MovieRecommend[]> => { //Not tested
    const res = await api.get<MovieRecommend[]>(`recommend/${movieID}`);
    return res.data;
}