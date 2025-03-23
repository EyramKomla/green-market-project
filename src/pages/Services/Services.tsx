import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutline } from '@heroicons/react/24/outline';
import { ChatBubbleLeftIcon, UserPlusIcon, UserMinusIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { Service, Expert } from '../../types';







export default function Services() {
    const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const categories = [
    {
      id: 'crop-advisory',
      name: 'Crop Advisory',
      description: 'Expert guidance on pest control, soil fertility, and crop management',
      icon: '🌾'
    },
    {
      id: 'livestock-health',
      name: 'Livestock Health',
      description: 'Professional veterinary care and breeding consultation',
      icon: '🐄'
    },
    {
      id: 'equipment',
      name: 'Farm Equipment',
      description: 'Equipment rental, maintenance, and repair services',
      icon: '🚜'
    },
    {
      id: 'training',
      name: 'Training & Consultation',
      description: 'Workshops and expert consultation on farming practices',
      icon: '📚'
    },
    {
      id: 'logistics',
      name: 'Supply Chain & Logistics',
      description: 'Storage, transportation, and distribution solutions',
      icon: '🚛'
    }
  ];

  

  const services: Service[] = [
    {
      id: '1',
      title: 'Soil Health Analysis',
      provider: {
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
        contactNumber: '+233 20 123 4567'
      },
      category: 'crop-advisory',
      description: 'Comprehensive soil testing and fertility recommendations',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399',
      rating: 4.8,
      reviewCount: 156,
      price: 'GH₵200/acre',
      location: 'Kumasi',
      availability: true,
      reviews: []
    },
    // Add more service examples here
  ];

  const handleFollow = async (expertId: string) => {
    try {
      // API call to follow/unfollow expert
      // Update UI optimistically
      const updatedServices = services.map(service => {
        if (service.provider.id === expertId) {
          return {
            ...service,
            provider: {
              ...service.provider,
              isFollowing: !service.provider.isFollowing,
              followers: service.provider.isFollowing 
                ? service.provider.followers - 1 
                : service.provider.followers + 1
            }
          };
        }
        return service;
      });
      // Update services state
    } catch (error) {
      // Handle error and revert UI changes
    }
  };

  const handleRequestService = (serviceId: string) => {
    setSelectedService(services.find(s => s.id === serviceId) || null);
    // Open booking modal or chat
  };

  const ServiceCard = ({ service }: { service: Service }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-48 object-cover"
        />
        {!service.availability && (
          <div className="absolute top-2 right-2 bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
            Currently Unavailable
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
            <button 
              onClick={() => navigate(`/expert/${service.provider.id}`)}
              className="text-sm text-[#468847] hover:underline"
            >
              by {service.provider.name}
            </button>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <StarIcon 
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(service.rating) 
                      ? 'text-yellow-400' 
                      : 'text-gray-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {service.reviewCount} reviews
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
            {service.category}
          </span>
          <span className="text-sm text-gray-600">
            {service.location}
          </span>
        </div>

        <p className="text-sm text-gray-700 mb-4">{service.description}</p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-[#468847] font-medium">{service.price}</span>
          <div className="flex gap-2">
            <button
              onClick={() => handleFollow(service.provider.id)}
              className={`flex items-center gap-1 px-3 py-1 rounded-md text-sm ${
                service.provider.isFollowing
                  ? 'bg-gray-100 text-gray-700'
                  : 'bg-[#468847] text-white'
              }`}
            >
              {service.provider.isFollowing ? (
                <><UserMinusIcon className="h-4 w-4" /> Unfollow</>
              ) : (
                <><UserPlusIcon className="h-4 w-4" /> Follow</>
              )}
            </button>
            <button
              onClick={() => handleRequestService(service.id)}
              className="flex items-center gap-1 px-3 py-1 bg-[#468847] text-white rounded-md text-sm"
              disabled={!service.availability}
            >
              <ChatBubbleLeftIcon className="h-4 w-4" />
              Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Agricultural Services</h1>
      
      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`p-4 rounded-lg text-center transition-colors ${
              selectedCategory === category.id
                ? 'bg-[#468847] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <div className="text-2xl mb-2">{category.icon}</div>
            <h3 className="font-medium mb-1">{category.name}</h3>
            <p className="text-sm opacity-75">{category.description}</p>
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="rounded-md border-gray-300"
        >
          <option value="all">All Categories</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showAvailableOnly}
            onChange={(e) => setShowAvailableOnly(e.target.checked)}
            className="rounded text-[#468847]"
          />
          Available Only
        </label>

        <div className="flex items-center gap-2">
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-32"
          />
          <span className="text-sm text-gray-600">
            Max Price: GH₵{priceRange[1]}
          </span>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services
          .filter(service => (
            (selectedCategory === 'all' || service.category === selectedCategory) &&
            (!showAvailableOnly || service.availability) &&
            parseFloat(service.price.replace(/[^0-9.-]+/g, "")) <= priceRange[1]
          ))
          .map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
      </div>
    </div>
  );
}