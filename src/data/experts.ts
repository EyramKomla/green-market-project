import type { Expert } from '../types/interfaces/Expert';
import type { Service } from '../types/interfaces/Services';
import type { ServiceReview } from '../types/interfaces/Services';

export const experts: Expert[] = [
  {
    id: 'exp1',
    name: 'Dr. Kwame Mensah',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    specialty: 'Soil Science',
    experience: 15,
    bio: 'Expert in soil health and fertility management with over 15 years of experience',
    location: 'Kumasi',
    followers: 245,
    following: 123,
    isFollowing: false,
    rating: 4.8,
    contactNumber: '+233 20 123 4567',
    availability: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      hours: '9:00 AM - 5:00 PM'
    }
  }
];

export const mockReviews: ServiceReview[] = [
  {
    id: 'rev1',
    // Remove userName as it's not in the ServiceReview interface
    rating: 5,
    date: '2024-02-15',
    comment: 'Excellent service! Dr. Mensah provided detailed insights about our soil conditions.',
    serviceId: 'srv1',
    isVerified: true,
    user: {
      id: 'usr1',
      name: 'Kwesi Ameyaw',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
    }
  }
];

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
    provider: experts[0],
    location: 'Kumasi',
    reviews: mockReviews.filter(review => review.serviceId === 'srv1')
  }
];