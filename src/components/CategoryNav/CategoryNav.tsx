import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function CategoryNav() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const categories = [
    {
      name: 'Fresh Vegetables',
      description: 'Local and organic vegetables, leafy greens, and roots',
      path: '/category/vegetables',
      subcategories: ['Fresh Vegetables', 'Root Vegetables', 'Leafy Greens']
    },
    {
      name: 'Fresh Fruits',
      description: 'Seasonal fruits, exotic fruits, and citrus',
      path: '/category/fruits',
      subcategories: ['Fresh Fruits', 'Dried Fruits', 'Exotic Fruits']
    },
    {
      name: 'Grains & Cereals',
      description: 'Rice, wheat, maize, and other grains',
      path: '/category/grains',
      subcategories: ['Rice', 'Wheat', 'Maize']
    },
    {
      name: 'Livestock Products',
      description: 'Meat, dairy products, and eggs',
      path: '/category/livestock',
      subcategories: ['Meat', 'Dairy', 'Eggs']
    },
    {
      name: 'Farm Supplies',
      description: 'Seeds, fertilizers, and farming tools',
      path: '/category/supplies',
      subcategories: ['Seeds', 'Fertilizers', 'Tools']
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-x-1 text-sm/6 font-normal"
      >
        All Categories
        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none" />
      </button>

      {isOpen && (
        <div className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5">
          <div className="p-4">
            {categories.map((item) => (
              <div
                key={item.name}
                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
              >
                <div className="flex-auto">
                  <Link to={item.path} className="block font-semibold text-gray-900">
                    {item.name}
                    <span className="absolute inset-0" />
                  </Link>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}