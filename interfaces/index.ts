// PropertyProps interface with full typing
export interface PropertyProps {
  id: string;
  name: string;
  rating: number;
  address: {
    city: string;
    country: string;
    street?: string;
  };
  image: string;
  images?: string[];
  description: string;
  category: string[];
  price: number;
  reviews?: ReviewProps[];
}

export interface ReviewProps {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date?: string;
}

export interface BookingProps {
  price: number;
  onReserve?: (checkIn: string, checkOut: string) => void;
}

export interface PropertyDetailProps {
  property: PropertyProps;
}
