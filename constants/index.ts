import { PropertyProps } from "@/interfaces/index";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: "1",
    name: "Luxury Beachfront Villa",
    rating: 4.8,
    address: {
      city: "Malibu",
      country: "USA",
      street: "10 Ocean Drive",
    },
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600573472550-d323e0601ba?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154319-e84d8a0b5ba1?w=800&h=600&fit=crop",
    ],
    description: "A stunning beachfront villa with modern amenities, private pool, and breathtaking ocean views. Perfect for families or groups seeking luxury and relaxation.",
    category: ["WiFi", "Pool", "Air Conditioning", "Kitchen", "Parking", "Gym"],
    price: 350,
    reviews: [
      {
        id: "r1",
        name: "Sarah Johnson",
        avatar: "https://i.pravatar.cc/150?img=1",
        rating: 5,
        comment: "Absolutely amazing experience! The villa exceeded all expectations.",
        date: "2024-11-15",
      },
      {
        id: "r2",
        name: "Michael Chen",
        avatar: "https://i.pravatar.cc/150?img=2",
        rating: 4,
        comment: "Great property with excellent service. Would definitely return.",
        date: "2024-11-10",
      },
      {
        id: "r3",
        name: "Emma Davis",
        avatar: "https://i.pravatar.cc/150?img=3",
        rating: 5,
        comment: "Perfect for family vacation. Clean, spacious, and beautiful views.",
        date: "2024-11-05",
      },
    ],
  },
];
