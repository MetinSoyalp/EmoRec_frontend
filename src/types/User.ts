//This file contains user related classes

export interface WatchedMovie {
  movieID: string;
  date: string;
}

export interface User {
  _id: string;
  UserID: string;
  Name: string;
  WatchedMovies: WatchedMovie[];
  U_EmotionVector: number[];
  U_GenreVector: number[];
}

export interface RegisterUserPayload {
  Name: string;
  FavoriteMovie1: string;
  FavoriteMovie2: string;
  FavoriteMovie3: string;
}