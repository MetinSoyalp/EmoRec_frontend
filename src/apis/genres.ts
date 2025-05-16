import api from "./axios.ts";

export const getAllGenres = async (): Promise<string[]> => { //Tested - partially
    const res = await api.get<string[]>(`genres/get_all_genres`);
    console.log(res.data)
    return res.data;
}