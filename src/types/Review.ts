//This class contains classes neccessary for reviews

export interface Review {
  _id: string;
  ReviewID: string;
  MovieID: string;
  Username: string;
  Rating?: number;
  LikeCount: number;
  DislikeCount: number;
  Date: string; // ISO 8601 string from backend (e.g., "2024-05-04T14:30:00Z")
  Title?: string;
  Body?: string;
  MovieName?: string;
  R_Emotion_Vector: number[];
}