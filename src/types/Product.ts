export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  images: string[];
  description: string;
  rating: number;
  stock: number;
  unit: string;
  minOrder: number;
  maxOrder: number;
  seller: {
    id: string;
    name: string;
    rating: number;
    profilePicture: string;
    location: string;
    contactNumber: string;
  };
  traceability: {
    farmName: string;
    location: string;
    harvestDate: string;
    farmingMethod: string;
    carbonFootprint: string;
    transportMethod: string;
    distributionCenter: string;
    soilType: string;
    waterSource: string;
    pesticides: string;
    batchNumber: string;
    packagingDate: string;
    qualityCertification: string;
    qrCode?: string;
  };
  deliveryOptions: {
    pickup: {
      available: boolean;
      location?: string;
      coordinates?: {
        lat: number;
        lng: number;
      };
    };
    standardDelivery: {
      cost: number;
      estimatedTime: string;
      available?: boolean;
      restrictions?: string;
    };
    expressDelivery: {
      cost: number;
      estimatedTime: string;
      available?: boolean;
      restrictions?: string;
    };
  };
  ratings: {
    average: number;
    reviews: Array<{
      user: string;
      rating: number;
      comment: string;
      image?: string;
      date?: string;
    }>;
  };
  nutritionalValue?: {
    calories: string;
    carbohydrates: string;
    protein: string;
  };
  storageInstructions?: string;
  paymentOptions: {
    acceptsCreditCard: boolean;
    acceptsMobileMoney: boolean;
    acceptsCashOnDelivery: boolean;
    acceptsPaypal: boolean;
  };
  discounts: {
    bulk: {
      minQuantity: number;
      percentage: number;
    };
    seasonal: boolean;
    promoCode?: string;
  };
}

export interface CartItem extends Product {
  quantity: number;
}