import type { Product } from '../types/Product';

export const products: Product[] = [

    {
        "id": 1,
        "name": "Fresh Organic Tomatoes",
        "price": 4.99,
        "category": "vegetables",
        "image": "https://images.unsplash.com/photo-1546470427-f5b713b6f3de",
        "images": [
            "https://images.unsplash.com/photo-1546470427-f5b713b6f3de",
            "https://images.unsplash.com/photo-1592924357228-91a4daadcfea",
            "https://images.unsplash.com/photo-1518977676601-b53f82aba655"
        ],
        "description": "Locally grown organic tomatoes, perfect for salads and cooking.",
        "rating": 4.5,
        "stock": 50,
        "unit": "kg",
        "minOrder": 1,
        "maxOrder": 10,
        "seller": {
            "id": "GFG001",
            "name": "Green Farms Ghana",
            "rating": 4.8,
            "profilePicture": "https://images.unsplash.com/photo-1507914372368-b2b085b925a1",
            "location": "Aburi, Eastern Region",
            "contactNumber": "+233 20 500 3251"
        },
        "traceability": {
            "farmName": "Green Farms",
            "location": "Aburi, Eastern Region",
            "harvestDate": "2023-10-15",
            "farmingMethod": "Organic",
            "carbonFootprint": "Low - 0.5kg CO2/kg",
            "transportMethod": "Local Delivery",
            "distributionCenter": "Accra Distribution Hub",
            "soilType": "Rich Loamy Soil",
            "waterSource": "Natural Spring",
            "pesticides": "None - Organic Farming",
            "batchNumber": "TOM-2023-1015",
            "packagingDate": "2023-10-16",
            "qualityCertification": "Organic Certified, Food Safety Certified",
            "qrCode": "https://example.com/qr-code.png"
        },
        "deliveryOptions": {
            "pickup": {
                "available": true,
                "location": "Accra Central Market",
                "coordinates": {
                    "lat": 5.5502,
                    "lng": -0.2174
                }
            },
            "standardDelivery": {
                "cost": 10,
                "estimatedTime": "2-3 days",
                "available": true,
                "restrictions": "Delivery within Greater Accra only"
            },
            "expressDelivery": {
                "cost": 20,
                "estimatedTime": "Same day",
                "available": true,
                "restrictions": "Order before 2 PM for same-day delivery"
            }
        },
        "ratings": {
            "average": 4.5,
            "reviews": [
                {
                    "user": "John D.",
                    "rating": 5,
                    "comment": "Very fresh and tasty tomatoes!",
                    "image": "https://images.unsplash.com/photo-1633439708995-21ed1d2a3340",
                    "date": "2023-10-20"
                }
            ]
        },
        "nutritionalValue": {
            "calories": "18 kcal",
            "carbohydrates": "3.9g",
            "protein": "0.9g"
        },
        "storageInstructions": "Store in a cool, dry place. Best consumed within 5 days.",
        "paymentOptions": {
            "acceptsCreditCard": true,
            "acceptsMobileMoney": true,
            "acceptsCashOnDelivery": true,
            "acceptsPaypal": true
        },
        "discounts": {
            "bulk": {
                "minQuantity": 5,
                "percentage": 10
            },
            "seasonal": false,
            "promoCode": "FRESH10"
        }
    },
  {
    id: 2,
    name: 'Premium Cocoa Beans',
    price: 12.99,
    category: 'cash-crops',
    image: 'https://images.unsplash.com/photo-1617194663454-aa33cb97e4e1',
    images: [
      'https://images.unsplash.com/photo-1617194663454-aa33cb97e4e1',
      'https://images.unsplash.com/photo-1617194663454-aa33cb97e4e2',
      'https://images.unsplash.com/photo-1617194663454-aa33cb97e4e3'
    ],
    description: 'High-quality Ghanaian cocoa beans, perfect for chocolate making and confectionery.',
    rating: 4.9,
    stock: 200,
    unit: 'kg',
    minOrder: 5,
    maxOrder: 50,
    seller: {
      id: 'CCF002',
      name: 'Cocoa Cooperative Farms',
      rating: 4.9,
      profilePicture: 'https://images.unsplash.com/photo-1591472053294-8b455c9f8a8a',
      location: 'Kumasi, Ashanti Region',
      contactNumber: '+233 24 555 7890'
    },
    traceability: {
      farmName: 'Cocoa Cooperative Farms',
      location: 'Kumasi, Ashanti Region',
      harvestDate: '2023-09-15',
      farmingMethod: 'Traditional',
      carbonFootprint: 'Medium - 1.2kg CO2/kg',
      transportMethod: 'Refrigerated Transport',
      distributionCenter: 'Kumasi Export Hub',
      soilType: 'Forest Soil',
      waterSource: 'Rainfall',
      pesticides: 'Minimal Usage',
      batchNumber: 'CCB-2023-0915',
      packagingDate: '2023-09-20',
      qualityCertification: 'Fair Trade Certified, Export Grade A',
      qrCode: 'https://example.com/qr-code-cocoa.png'
    },
    deliveryOptions: {
      pickup: {
        available: true,
        location: 'Kumasi Central',
        coordinates: {
          lat: 6.6885,
          lng: -1.6244
        }
      },
      standardDelivery: {
        cost: 15,
        estimatedTime: '3-5 days',
        available: true,
        restrictions: 'Minimum order 5kg required'
      },
      expressDelivery: {
        cost: 30,
        estimatedTime: '1-2 days',
        available: true,
        restrictions: 'Subject to availability'
      }
    },
    ratings: {
      average: 4.9,
      reviews: [
        {
          user: 'Michael K.',
          rating: 5,
          comment: 'Excellent quality cocoa beans!',
          image: 'https://images.unsplash.com/photo-1591472053294-8b455c9f8a8b',
          date: '2023-09-25'
        }
      ]
    },
    nutritionalValue: {
      calories: '228 kcal',
      carbohydrates: '57.9g',
      protein: '19.6g'
    },
    storageInstructions: 'Store in a cool, dry place. Best used within 6 months.',
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
      promoCode: 'COCOA15'
    }
  },
  {
    id: 3,
    name: 'Fresh Pineapples',
    price: 3.99,
    category: 'fruits',
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba',
    images: [
      'https://images.unsplash.com/photo-1550258987-190a2d41a8ba',
      'https://images.unsplash.com/photo-1550258987-190a2d41a8bb',
      'https://images.unsplash.com/photo-1550258987-190a2d41a8bc'
    ],
    description: 'Sweet and juicy pineapples from the coastal regions of Ghana.',
    rating: 4.7,
    stock: 150,
    unit: 'piece',
    minOrder: 2,
    maxOrder: 20,
    seller: {
      id: 'TPF003',
      name: 'Tropical Paradise Farms',
      rating: 4.7,
      profilePicture: 'https://images.unsplash.com/photo-1591472053294-8b455c9f8a8c',
      location: 'Cape Coast, Central Region',
      contactNumber: '+233 27 888 9012'
    },
    traceability: {
      farmName: 'Tropical Paradise Farms',
      location: 'Cape Coast, Central Region',
      harvestDate: '2023-10-20',
      farmingMethod: 'Sustainable',
      carbonFootprint: 'Low - 0.3kg CO2/kg',
      transportMethod: 'Local Distribution',
      distributionCenter: 'Cape Coast Hub',
      soilType: 'Sandy Loam',
      waterSource: 'Drip Irrigation',
      pesticides: 'Organic Methods',
      batchNumber: 'PIN-2023-1020',
      packagingDate: '2023-10-21',
      qualityCertification: 'Organic Certified',
      qrCode: 'https://example.com/qr-code-pineapple.png'
    },
    deliveryOptions: {
      pickup: {
        available: true,
        location: 'Cape Coast Market',
        coordinates: {
          lat: 5.1315,
          lng: -1.2795
        }
      },
      standardDelivery: {
        cost: 8,
        estimatedTime: '1-2 days',
        available: true,
        restrictions: 'Coastal region delivery only'
      },
      expressDelivery: {
        cost: 15,
        estimatedTime: 'Same day',
        available: true,
        restrictions: 'Order before 12 PM'
      }
    },
    ratings: {
      average: 4.7,
      reviews: [
        {
          user: 'Sarah A.',
          rating: 5,
          comment: "Sweetest pineapples I've ever tasted!",
          image: 'https://images.unsplash.com/photo-1591472053294-8b455c9f8a8d',
          date: '2023-10-25'
        }
      ]
    },
    nutritionalValue: {
      calories: '50 kcal',
      carbohydrates: '13g',
      protein: '0.5g'
    },
    storageInstructions: 'Store at room temperature until ripe, then refrigerate. Best consumed within 5 days.',
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
      promoCode: 'SWEET12'
    }
  },
  {
    id: 4,
    name: 'Premium Cashew Nuts',
    price: 15.99,
    category: 'nuts',
    image: 'https://images.unsplash.com/photo-1590544673792-48c5e2c35c78',
    images: [
      'https://images.unsplash.com/photo-1590544673792-48c5e2c35c78',
      'https://images.unsplash.com/photo-1590544673792-48c5e2c35c79',
      'https://images.unsplash.com/photo-1590544673792-48c5e2c35c80'
    ],
    description: 'Premium grade cashew nuts, carefully processed and packed for maximum freshness.',
    rating: 4.8,
    stock: 100,
    unit: 'kg',
    minOrder: 1,
    maxOrder: 15,
    seller: {
      id: 'CNP004',
      name: 'Cashew Nuts Processing Co.',
      rating: 4.8,
      profilePicture: 'https://images.unsplash.com/photo-1591472053294-8b455c9f8a8e',
      location: 'Tamale, Northern Region',
      contactNumber: '+233 26 777 3456'
    },
    traceability: {
      farmName: 'Northern Cashew Estates',
      location: 'Tamale, Northern Region',
      harvestDate: '2023-08-15',
      farmingMethod: 'Traditional',
      carbonFootprint: 'Medium - 0.8kg CO2/kg',
      transportMethod: 'Temperature Controlled',
      distributionCenter: 'Tamale Processing Center',
      soilType: 'Red Soil',
      waterSource: 'Borehole',
      pesticides: 'Minimal Usage',
      batchNumber: 'CSH-2023-0815',
      packagingDate: '2023-08-20',
      qualityCertification: 'Export Grade, Food Safety Certified',
      qrCode: 'https://example.com/qr-code-cashew.png'
    },
    deliveryOptions: {
      pickup: {
        available: true,
        location: 'Tamale Central',
        coordinates: {
          lat: 9.4067,
          lng: -0.8389
        }
      },
      standardDelivery: {
        cost: 12,
        estimatedTime: '2-4 days',
        available: true,
        restrictions: 'Nationwide delivery available'
      },
      expressDelivery: {
        cost: 25,
        estimatedTime: '1-2 days',
        available: true,
        restrictions: 'Major cities only'
      }
    },
    ratings: {
      average: 4.8,
      reviews: [
        {
          user: 'David O.',
          rating: 5,
          comment: 'High quality cashews, great packaging!',
          image: 'https://images.unsplash.com/photo-1591472053294-8b455c9f8a8f',
          date: '2023-09-05'
        }
      ]
    },
    nutritionalValue: {
      calories: '553 kcal',
      carbohydrates: '30.2g',
      protein: '18.2g'
    },
    storageInstructions: 'Store in an airtight container in a cool, dry place. Best consumed within 3 months.',
    paymentOptions: {
      acceptsCreditCard: true,
      acceptsMobileMoney: true,
      acceptsCashOnDelivery: false,
      acceptsPaypal: true
    },
    discounts: {
      bulk: {
        minQuantity: 8,
        percentage: 18
      },
      seasonal: false,
      promoCode: 'NUTS18'
    }
  },{
    id: 5,
    name: 'Organic Carrots',
    price: 3.49,
    category: 'vegetables',
    image: 'https://images.unsplash.com/photo-1582515073490-39981397a3a5',
    images: [
      'https://images.unsplash.com/photo-1582515073490-39981397a3a5',
      'https://images.unsplash.com/photo-1600891964091-7dd1b004dbd7'
    ],
    description: 'Fresh organic carrots, rich in vitamins and perfect for cooking.',
    rating: 4.6,
    stock: 80,
    unit: 'kg',
    minOrder: 1,
    maxOrder: 15,
    seller: {
      id: 'VGF005',
      name: 'Vegetable Growers Farm',
      rating: 4.7,
      profilePicture: 'https://images.unsplash.com/photo-1605022604070-65d1106e8b2f',
      location: 'Koforidua, Eastern Region',
      contactNumber: '+233 27 345 6789'
    },
    traceability: {
      farmName: 'Vegetable Growers',
      location: 'Koforidua, Eastern Region',
      harvestDate: '2023-11-10',
      farmingMethod: 'Organic',
      carbonFootprint: 'Low - 0.4kg CO2/kg',
      transportMethod: 'Local Transport',
      distributionCenter: 'Koforidua Hub',
      soilType: 'Loamy Soil',
      waterSource: 'Irrigation',
      pesticides: 'None - Organic',
      batchNumber: 'CAR-2023-1110',
      packagingDate: '2023-11-11',
      qualityCertification: 'Organic Certified',
      qrCode: 'https://example.com/qr-code-carrot.png'
    },
    deliveryOptions: {
      pickup: {
        available: true,
        location: 'Koforidua Market',
        coordinates: { lat: 6.0932, lng: -0.2591 }
      },
      standardDelivery: {
        cost: 10,
        estimatedTime: '2-3 days',
        available: true,
        restrictions: 'Delivery within Eastern Region only'
      },
      expressDelivery: {
        cost: 18,
        estimatedTime: 'Same day',
        available: true,
        restrictions: 'Order before 1 PM for same-day delivery'
      }
    },
    ratings: {
      average: 4.6,
      reviews: [
        {
          user: 'Linda P.',
          rating: 5,
          comment: 'Very fresh and crunchy!',
          image: 'https://images.unsplash.com/photo-1598902238357-38cbb1f5a0ec',
          date: '2023-11-12'
        }
      ]
    },
    nutritionalValue: {
      calories: '41 kcal',
      carbohydrates: '9.6g',
      protein: '0.9g'
    },
    storageInstructions: 'Store in a cool, dry place. Best consumed within 7 days.',
    paymentOptions: {
      acceptsCreditCard: true,
      acceptsMobileMoney: true,
      acceptsCashOnDelivery: true,
      acceptsPaypal: false
    },
    discounts: {
      bulk: {
        minQuantity: 6,
        percentage: 10
      },
      seasonal: false,
      promoCode: 'CARROT10'
    }
  },
  {
    id: 6,
    name: 'Raw Honey',
    price: 9.99,
    category: 'natural-products',
    image: 'https://images.unsplash.com/photo-1615312016532-c743f6e0669e',
    images: [
      'https://images.unsplash.com/photo-1615312016532-c743f6e0669e',
      'https://images.unsplash.com/photo-1614273784444-8f65cfb093f7'
    ],
    description: 'Pure raw honey, harvested from local bee farms.',
    rating: 4.9,
    stock: 120,
    unit: 'jar',
    minOrder: 1,
    maxOrder: 10,
    seller: {
      id: 'BEE006',
      name: 'Bee Haven',
      rating: 4.9,
      profilePicture: 'https://images.unsplash.com/photo-1614273784444-8f65cfb093f7',
      location: 'Sunyani, Bono Region',
      contactNumber: '+233 55 789 1234'
    },
    traceability: {
      farmName: 'Bee Haven',
      location: 'Sunyani, Bono Region',
      harvestDate: '2023-12-05',
      farmingMethod: 'Natural',
      carbonFootprint: 'Minimal - 0.2kg CO2/kg',
      transportMethod: 'Eco-friendly Packaging',
      distributionCenter: 'Bono Region Hub',
      soilType: 'N/A',
      waterSource: 'N/A',
      pesticides: 'None - Natural Beekeeping',
      batchNumber: 'HNY-2023-1205',
      packagingDate: '2023-12-06',
      qualityCertification: 'Organic Certified, Pure Honey Seal',
      qrCode: 'https://example.com/qr-code-honey.png'
    },
    deliveryOptions: {
      pickup: {
        available: true,
        location: 'Sunyani Central Market',
        coordinates: { lat: 7.3389, lng: -2.3267 }
      },
      standardDelivery: {
        cost: 12,
        estimatedTime: '3-4 days',
        available: true,
        restrictions: 'Nationwide delivery available'
      },
      expressDelivery: {
        cost: 22,
        estimatedTime: '1-2 days',
        available: true,
        restrictions: 'Major cities only'
      }
    },
    ratings: {
      average: 4.9,
      reviews: [
        {
          user: 'Paul K.',
          rating: 5,
          comment: 'Best honey I have ever tasted! Rich flavor.',
          image: 'https://images.unsplash.com/photo-1614273784444-8f65cfb093f8',
          date: '2023-12-10'
        }
      ]
    },
    nutritionalValue: {
      calories: '304 kcal',
      carbohydrates: '82g',
      protein: '0.3g'
    },
    storageInstructions: 'Store at room temperature in a sealed container.',
    paymentOptions: {
      acceptsCreditCard: true,
      acceptsMobileMoney: true,
      acceptsCashOnDelivery: false,
      acceptsPaypal: true
    },
    discounts: {
      bulk: {
        minQuantity: 5,
        percentage: 12
      },
      seasonal: true,
      promoCode: 'HONEY12'
    }
  }
];