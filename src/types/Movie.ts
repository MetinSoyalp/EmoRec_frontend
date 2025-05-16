//This class contains classes neccessary for movie and movie recommendation results

export interface CrewMember {
    Actor: string;
    Character: string;
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
    movie: Movie,
    cos_sim: number,
    final_score: number,
}

export interface PaginatedMovieResponse {
    page: number;
    page_size: number;
    total: number;
    results: Movie[];  // List of movies in the current page
}