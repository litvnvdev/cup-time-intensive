interface ProductCardProps {
  title: string;
  img: string;
  price: number;
}

export function ProductCard({ title, img, price }: ProductCardProps) {
  return (
    <div className="min-w-36 bg-teal-50 rounded-md">
      <img className="w-full rounded-t-md" src={img} alt={title} />
      <div className="flex flex-col mt-8 gap-8 text-sm font-normal px-2">
        <h3 className="truncate">{title}</h3>
        <p className="pb-4">{price} ₽</p>
      </div>
    </div>
  );
}
