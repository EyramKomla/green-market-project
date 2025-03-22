import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

interface FilterPanelProps {
  onPriceChange: (min: number, max: number) => void;
  onCategorySelect: (category: string) => void;
  onRatingFilter: (rating: number) => void;
  onSortChange: (sort: string) => void;
  onAvailabilityChange: (inStock: boolean) => void;
}

const popularCategories = [
  'Vegetables', 'Fruits', 'Organic', 'Fresh Produce',
  'Local Farm', 'Seasonal', 'Grains', 'Dairy'
];

const sortOptions = [
  { label: 'Price: Low to High', value: 'price_asc' },
  { label: 'Price: High to Low', value: 'price_desc' },
  { label: 'Rating: High to Low', value: 'rating_desc' },
  { label: 'Newest First', value: 'newest' }
];

export default function FilterPanel({ 
  onPriceChange, 
  onCategorySelect, 
  onRatingFilter,
  onSortChange,
  onAvailabilityChange 
}: FilterPanelProps) {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [inStockOnly, setInStockOnly] = useState(false);

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    const isMin = event.target.name === 'min';
    const newRange = isMin ? [value, priceRange[1]] : [priceRange[0], value];
    setPriceRange(newRange);
    onPriceChange(newRange[0], newRange[1]);
  };

  return (
    <div className="w-64 bg-white p-6 rounded-lg shadow space-y-6">
      {/* Sort Options */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Sort By</h3>
        <select 
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full p-2 border rounded-md text-sm"
        >
          {sortOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Price Range</h3>
        <div className="space-y-4">
          <input
            type="range"
            name="min"
            min="0"
            max="100"
            value={priceRange[0]}
            onChange={handlePriceChange}
            className="w-full accent-[#468847]"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>GH₵{priceRange[0]}</span>
            <span>GH₵{priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {popularCategories.map((category) => (
            <button
              key={category}
              onClick={() => {
                const newCategories = selectedCategories.includes(category)
                  ? selectedCategories.filter(c => c !== category)
                  : [...selectedCategories, category];
                setSelectedCategories(newCategories);
                onCategorySelect(category);
              }}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedCategories.includes(category)
                  ? 'bg-[#468847] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Rating Filter */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Rating</h3>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <button
              key={rating}
              onClick={() => {
                setSelectedRating(rating);
                onRatingFilter(rating);
              }}
              className={`flex items-center w-full p-2 rounded ${
                selectedRating === rating ? 'bg-gray-100' : ''
              }`}
            >
              {[...Array(rating)].map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
              ))}
              {[...Array(5 - rating)].map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 text-gray-200" />
              ))}
              <span className="ml-2 text-sm text-gray-600">& Up</span>
            </button>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Availability</h3>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => {
              setInStockOnly(e.target.checked);
              onAvailabilityChange(e.target.checked);
            }}
            className="rounded text-[#468847] focus:ring-[#468847]"
          />
          <span className="text-sm text-gray-700">In Stock Only</span>
        </label>
      </div>

      {/* Clear Filters Button */}
      <button
        onClick={() => {
          setPriceRange([0, 100]);
          setSelectedCategories([]);
          setSelectedRating(0);
          setInStockOnly(false);
          onPriceChange(0, 100);
          onRatingFilter(0);
          onAvailabilityChange(false);
        }}
        className="w-full py-2 text-sm text-[#468847] hover:text-[#3a7139] transition-colors"
      >
        Clear All Filters
      </button>
    </div>
  );
}