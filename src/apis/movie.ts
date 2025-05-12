import { Movie, MovieRecommend } from "../types/Movie";
import api from "./axios.ts";

interface PaginatedMovieResponse {
    page: number;
    page_size: number;
    total: number;
    results: Movie[];  // List of movies in the current page
}

export const findMovieById = async (movieID: string): Promise<Movie> => { //Tested - partially
    const res = await api.get<Movie>(`movie/${movieID}`);
    return res.data;
}

// List of Movie döndürüyör
export const getMoviePaginated = async (page: number): Promise<Movie[]> => { //Not tested
    const res = await api.get<PaginatedMovieResponse>(`movie/list?page=${page}&limit=10`);
    return res.data.results;
}

// calculate_genres_vectors - belki
// No return

// calculate_emo_vectors - belki
// No return

// List of MovieRecommend döndürüyör
export const movieToMovieRecommend = async (movieID: string): Promise<MovieRecommend[]> => { //Not tested
    const res = await api.get<MovieRecommend[]>(`movie/recommend/${movieID}`);
    return res.data;
}