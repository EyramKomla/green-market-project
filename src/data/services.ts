import type { Service } from '../types/interfaces/Services';

export const services: Service[] = [
  {
    id: 'srv1',
    title: 'Soil Health Analysis',
    description: 'Comprehensive soil testing and fertility recommendations',
    price: 'GH₵200/acre',
    category: 'crop-advisory',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399',
    rating: 4.8,
    reviewCount: 156,
    availability: true,
    location: 'Kumasi',
    provider: {
      id: 'exp1',
      name: 'Dr. Kwame Mensah',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      specialty: 'Soil Science',
      experience: 15,
      bio: 'Expert in soil health and fertility management',
      location: 'Kumasi',
      followers: 245,
      following: 123,
      isFollowing: false,
      rating: 4.8,
      contactNumber: '+233 20 123 4567'
    },
    reviews: []
  },
  {
    id: 'srv2',
    title: 'Livestock Health Consultation',
    description: 'Professional veterinary care and health assessment',
    price: 'GH₵150/visit',
    category: 'livestock-health',
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a',
    rating: 4.6,
    reviewCount: 89,
    availability: true,
    location: 'Accra',
    provider: {
      id: 'exp2',
      name: 'Dr. Sarah Addo',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      specialty: 'Veterinary Medicine',
      experience: 10,
      bio: 'Specialized in livestock health and breeding',
      location: 'Accra',
      followers: 180,
      following: 95,
      isFollowing: false,
      rating: 4.7,
      contactNumber: '+233 24 567 8901'
    },
    reviews: []
  },
  {
    id: 'srv3',
    title: 'Farm Equipment Rental',
    description: 'Modern farming equipment rental service',
    price: 'GH₵500/day',
    category: 'equipment',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854',
    rating: 4.5,
    reviewCount: 72,
    availability: true,
    location: 'Tamale',
    provider: {
      id: 'exp3',
      name: 'Emmanuel Koffi',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
      specialty: 'Agricultural Equipment',
      experience: 8,
      bio: 'Equipment specialist and maintenance expert',
      location: 'Tamale',
      followers: 156,
      following: 82,
      isFollowing: false,
      rating: 4.5,
      contactNumber: '+233 26 789 0123'
    },
    reviews: []
  }
];