

import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Fresh Organic Tomatoes",
    price: 4.99,
    category: "vegetables",
    image: "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg",
    images: [
      "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg",
      "https://images.pexels.com/photos/2899682/pexels-photo-2899682.jpeg",
      "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg"
    ],
    description: "Locally grown organic tomatoes, perfect for salads and cooking.",
    rating: 4.5,
    stock: 50,
    unit: "kg",
    minOrder: 1,
    maxOrder: 10,
    seller: {
      id: "GFG001",
      name: "Green Farms Ghana",
      rating: 4.8,
      profilePicture: "https://images.unsplash.com/photo-1507914372368-b2b085b925a1",
      location: "Aburi, Eastern Region",
      contactNumber: "+233 20 500 3251"
    },
    traceability: {
      farmName: "Green Farms",
      location: "Aburi, Eastern Region",
      harvestDate: "2023-10-15",
      farmingMethod: "Organic",
      carbonFootprint: "Low - 0.5kg CO2/kg",
      transportMethod: "Local Delivery",
      distributionCenter: "Accra Distribution Hub",
      soilType: "Rich Loamy Soil",
      waterSource: "Natural Spring",
      pesticides: "None - Organic Farming",
      batchNumber: "TOM-2023-1015",
      packagingDate: "2023-10-16",
      qualityCertification: "Organic Certified, Food Safety Certified",
    qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=TOM-2023-1015",
    
    },
    deliveryOptions: {
      pickup: {
        available: true,
        location: "Accra Central Market",
        coordinates: {
          lat: 5.5502,
          lng: -0.2174
        }
      },
      standardDelivery: {
        cost: 10,
        estimatedTime: "2-3 days",
        available: true,
        restrictions: "Delivery within Greater Accra only"
      },
      expressDelivery: {
        cost: 20,
        estimatedTime: "Same day",
        available: true,
        restrictions: "Order before 2 PM for same-day delivery"
      }
    },
    ratings: {
      average: 4.5,
      reviews: [
        {
          user: "John D.",
          rating: 5,
          comment: "Very fresh and tasty tomatoes!",
          image: "https://images.pexels.com/photos/5529599/pexels-photo-5529599.jpeg",
          date: "2023-10-20"
        }
      ]
    },
    nutritionalValue: {
      calories: "18 kcal",
      carbohydrates: "3.9g",
      protein: "0.9g"
    },
    storageInstructions: "Store in a cool, dry place. Best consumed within 5 days.",
    paymentOptions: {
      acceptsCreditCard: true,
      acceptsMobileMoney: true,
      acceptsCashOnDelivery: true,
      acceptsPaypal: true
    },
    discounts: {
      bulk: {
        minQuantity: 5,
        percentage: 10
      },
      seasonal: false,
      promoCode: "FRESH10"
    }
  },
  {
    id: 2,
    name: "Premium Cocoa Beans",
    price: 12.99,
    category: "cash-crops",
    image: "https://images.pexels.com/photos/867466/pexels-photo-867466.jpeg",
    images: [
      "https://images.pexels.com/photos/867466/pexels-photo-867466.jpeg",
      "https://images.pexels.com/photos/867465/pexels-photo-867465.jpeg",
      "https://images.pexels.com/photos/867464/pexels-photo-867464.jpeg"
    ],
    description: "High-quality Ghanaian cocoa beans, perfect for chocolate making and confectionery.",
    rating: 4.9,
    stock: 200,
    unit: "kg",
    minOrder: 5,
    maxOrder: 50,
    seller: {
      id: "CCF002",
      name: "Cocoa Cooperative Farms",
      rating: 4.9,
      profilePicture: "https://images.pexels.com/photos/2382596/pexels-photo-2382596.jpeg",
      location: "Kumasi, Ashanti Region",
      contactNumber: "+233 24 555 7890"
    },
    traceability: {
      farmName: "Cocoa Cooperative Farms",
      location: "Kumasi, Ashanti Region",
      harvestDate: "2023-09-15",
      farmingMethod: "Traditional",
      carbonFootprint: "Medium - 1.2kg CO2/kg",
      transportMethod: "Refrigerated Transport",
      distributionCenter: "Kumasi Export Hub",
      soilType: "Forest Soil",
      waterSource: "Rainfall",
      pesticides: "Minimal Usage",
      batchNumber: "CCB-2023-0915",
      packagingDate: "2023-09-20",
      qualityCertification: "Fair Trade Certified, Export Grade A",
      qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CCB-2023-0915",
    },
    deliveryOptions: {
      pickup: {
        available: true,
        location: "Kumasi Central",
        coordinates: {
          lat: 6.6885,
          lng: -1.6244
        }
      },
      standardDelivery: {
        cost: 15,
        estimatedTime: "3-5 days",
        available: true,
        restrictions: "Minimum order 5kg required"
      },
      expressDelivery: {
        cost: 30,
        estimatedTime: "1-2 days",
        available: true,
        restrictions: "Subject to availability"
      }
    },
    ratings: {
      average: 4.9,
      reviews: [
        {
          user: "Michael K.",
          rating: 5,
          comment: "Excellent quality cocoa beans!",
          image: "https://images.pexels.com/photos/5529600/pexels-photo-5529600.jpeg",
          date: "2023-09-25"
        }
      ]
    },
    nutritionalValue: {
      calories: "228 kcal",
      carbohydrates: "57.9g",
      protein: "19.6g"
    },
    storageInstructions: "Store in a cool, dry place. Best used within 6 months.",
    paymentOptions: {
      acceptsCreditCard: true,
      acceptsMobileMoney: true,
      acceptsCashOnDelivery: false,
      acceptsPaypal: true
    },
    discounts: {
      bulk: {
        minQuantity: 20,
        percentage: 15
      },
      seasonal: true,
      promoCode: "COCOA15"
    }
  },
  {
    id: 3,
    name: "Fresh Pineapples",
    price: 3.99,
    category: "fruits",
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba",
    images: [
      "https://images.pexels.com/photos/2469772/pexels-photo-2469772.jpeg",
      "https://images.pexels.com/photos/1161547/pexels-photo-1161547.jpeg",
      "https://images.pexels.com/photos/947879/pexels-photo-947879.jpeg"
    ],
    description: "Sweet and juicy pineapples from the coastal regions of Ghana.",
    rating: 4.7,
    stock: 150,
    unit: "piece",
    minOrder: 2,
    maxOrder: 20,
    seller: {
      id: "TPF003",
      name: "Tropical Paradise Farms",
      rating: 4.7,
      profilePicture: "https://images.pexels.com/photos/2382597/pexels-photo-2382597.jpeg",
      location: "Cape Coast, Central Region",
      contactNumber: "+233 27 888 9012"
    },
    traceability: {
      farmName: "Tropical Paradise Farms",
      location: "Cape Coast, Central Region",
      harvestDate: "2023-10-20",
      farmingMethod: "Sustainable",
      carbonFootprint: "Low - 0.3kg CO2/kg",
      transportMethod: "Local Distribution",
      distributionCenter: "Cape Coast Hub",
      soilType: "Sandy Loam",
      waterSource: "Drip Irrigation",
      pesticides: "Organic Methods",
      batchNumber: "PIN-2023-1020",
      packagingDate: "2023-10-21",
      qualityCertification: "Organic Certified",
      qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=TOM-2023-1015"
    },
    deliveryOptions: {
      pickup: {
        available: true,
        location: "Cape Coast Market",
        coordinates: {
          lat: 5.1315,
          lng: -1.2795
        }
      },
      standardDelivery: {
        cost: 8,
        estimatedTime: "1-2 days",
        available: true,
        restrictions: "Coastal region delivery only"
      },
      expressDelivery: {
        cost: 15,
        estimatedTime: "Same day",
        available: true,
        restrictions: "Order before 12 PM"
      }
    },
    ratings: {
      average: 4.7,
      reviews: [
        {
          user: "Sarah A.",
          rating: 5,
          comment: "Sweetest pineapples I've ever tasted!",
          image: "https://images.pexels.com/photos/5529601/pexels-photo-5529601.jpeg",
          date: "2023-10-25"
        }
      ]
    },
    nutritionalValue: {
      calories: "50 kcal",
      carbohydrates: "13g",
      protein: "0.5g"
    },
    storageInstructions: "Store at room temperature until ripe, then refrigerate. Best consumed within 5 days.",
    paymentOptions: {
      acceptsCreditCard: true,
      acceptsMobileMoney: true,
      acceptsCashOnDelivery: true,
      acceptsPaypal: false
    },
    discounts: {
      bulk: {
        minQuantity: 10,
        percentage: 12
      },
      seasonal: true,
      promoCode: "SWEET12"
    }
  }
];