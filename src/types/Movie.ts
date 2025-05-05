//This class contains classes neccessary for movie and movie recommendation results

export interface CrewMember {
    name: string;
    role: string;
}

export interface Movie {
    _id: string;
    MovieID: string;
    MovieName: string;
    ImageURL?: string;
    Description?: string;
    RatingValue?: number;
    RatingCount?: number;
    DatePublished?: string;      // ISO string
    Keywords?: string[];
    Duration?: string;
    Director?: string;
    Crews?: CrewMember[];
    Genres?: string[];
    M_GenreVector?: number[];
    M_EmotionVector?: number[];
    Year?: string;
}

export interface MovieRecommend {
    movie: number,
    cos_sim: number,
    final_score: number,
}