import { Review } from './Reviews';

export interface Expert {
  id: string;
  name: string;
  image: string;
  specialty: string;
  experience: number;
  bio: string;
  location: string;
  followers: number;
  following: number;
  isFollowing?: boolean;
  rating: number;
  contactNumber?: string;
  availability?: {
    days: string[];
    hours: string;
  };
}

export interface ServiceReview extends Review {
  serviceId: string;
  isVerified: boolean;
}

export interface Service {
  id: string;
  title: string;
  provider: Expert;
  category: string;
  description: string;
  image: string;
  rating: number;
  reviewCount: number;
  price: string;
  location: string;
  availability: boolean;
  reviews: ServiceReview[];
}