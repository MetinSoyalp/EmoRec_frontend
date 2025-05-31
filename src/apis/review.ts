import { Review } from "../types/Review.ts";
import api from "./axios.ts";

export const getMovieReviews = async (movieID: string): Promise<Review[]> => {
    const res = await api.get<Review[]>(`review/movie/${movieID}`);
    return res.data;
}