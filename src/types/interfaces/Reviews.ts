export interface Review {
  user: string;
  rating: number;
  comment: string;
  image?: string;
  date?: string;
}

export interface Ratings {
  average: number;
  reviews: Review[];
}