import api from "./axios.ts";
import { RegisterUserPayload, User } from "../types/User"
import { MovieRecommend } from "../types/Movie.ts";

export const getUserInfo = async (userID: string): Promise<User | null> => {
    const res = await api.get<User | null>(`user/profile`, {
        headers: {
            "X-User-Id": userID
        }
    });
    return res.data;
}

export const registerUser = async (inputData: RegisterUserPayload): Promise<User | null> => { //Not tested
    const res = await api.post<User | null>(`user/register`, inputData);
    return res.data;
}

export const addMovieToWatched = async (userID: string, movieID: string): Promise<User | null> => { //Not tested
    const res = await api.post<User | null>(`user/watched/${movieID}`, {}, {
        headers: {
            "X-User-Id": userID
        }
    })
    return res.data;
}

export const userMovieRecommendation = async (userID: string): Promise<MovieRecommend[]> => { //Not tested
    const res = await api.get<MovieRecommend[]>(`user/recommend_movie`, {
        headers: {
            "X-User-Id": userID
        }
    })
    return res.data;
}