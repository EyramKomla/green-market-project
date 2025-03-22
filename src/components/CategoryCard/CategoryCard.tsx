interface CategoryCardProps {
  image: string;
  name: string;
}

export default function CategoryCard({ image, name }: CategoryCardProps) {
  return (
    <div className="relative group cursor-pointer">
      <img src={image} alt={name} className="w-full h-32 object-cover rounded-lg" />
      <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
        <span className="text-white font-semibold text-lg">{name}</span>
      </div>
    </div>
  );
}