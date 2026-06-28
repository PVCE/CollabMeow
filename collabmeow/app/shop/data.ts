const catProfiles = [
  {
    name: "Gamer",
    breed: "British Shorthair",
    age: "4 Months",
    color: "Blue",
    description: "Calm, friendly, and perfect for families.",
  },
  {
    name: "Milo",
    breed: "Ragdoll",
    age: "5 Months",
    color: "Cream",
    description: "Gentle, fluffy, and loves attention.",
  },
  {
    name: "Leo",
    breed: "Maine Coon",
    age: "6 Months",
    color: "Brown",
    description: "Large, confident, and very playful.",
  },
  {
    name: "Mochi",
    breed: "Scottish Fold",
    age: "3 Months",
    color: "White",
    description: "Sweet, soft, and very social.",
  },
  {
    name: "Oscar",
    breed: "Bengal",
    age: "5 Months",
    color: "Golden",
    description: "Active, smart, and full of energy.",
  },
  {
    name: "Nala",
    breed: "Persian",
    age: "4 Months",
    color: "Silver",
    description: "Elegant, quiet, and affectionate.",
  },
  {
    name: "Luna",
    breed: "Siamese",
    age: "7 Months",
    color: "Lilac",
    description: "Curious, vocal, and a natural explorer.",
  },
  {
    name: "Coco",
    breed: "Turkish Van",
    age: "2 Months",
    color: "Black & White",
    description: "Playful, bright, and always ready for fun.",
  },
  {
    name: "Pepper",
    breed: "Abyssinian",
    age: "8 Months",
    color: "Rust",
    description: "Energetic, curious, and endlessly charming.",
  },
  {
    name: "Sunny",
    breed: "Exotic Shorthair",
    age: "4 Months",
    color: "Cream",
    description: "Warm, cuddly, and wonderfully mellow.",
  },
];

const imagePool = [
  "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1570824104453-508955ab713e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?auto=format&fit=crop&w=1200&q=80",
];

export const cats = Array.from({ length: 67 }, (_, index) => {
  const profile = catProfiles[index % catProfiles.length];
  const priceValue = 1199 + (index % 10) * 95 + (index % 4) * 35;

  return {
    id: index + 1,
    name: `${profile.name}${index % 5 === 0 && index > 0 ? " " + (index % 3 === 0 ? "Sweetie" : "Bean") : ""}`.trim(),
    breed: profile.breed,
    age: profile.age,
    gender: index % 2 === 0 ? "Female" : "Male",
    color: profile.color,
    price: `$${priceValue.toLocaleString("en-US")}`,
    isNew: index < 18 || index % 4 === 0,
    isPopular: index % 3 === 0 || index < 6,
    featured: index === 0,
    image: imagePool[index % imagePool.length],
    description: profile.description,
  };
});