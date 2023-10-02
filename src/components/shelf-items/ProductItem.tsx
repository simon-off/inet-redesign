import { ShoppingCart } from "lucide-react";
import IProduct from "../../types/IProduct";

export default function ProductItem({ product }: { product: IProduct }) {
  return (
    <article className="relative h-full snap-start flex-col rounded-md border border-gray-300 bg-white shadow-[inset_0_0_32px_rgba(100,150,200,0.05)] dark:border-gray-700 dark:bg-gray-800">
      <a href="#" className="group flex h-full flex-col rounded-md">
        <div className="h-48 p-4">
          <img src={`images/${product.image}`} alt={product.name} className="mx-auto h-full object-contain" />
        </div>
        <div className="p-4 transition-colors duration-[50ms] group-hover:text-blue-500">
          <h2 className="mb-2 line-clamp-2 min-h-[calc(2em+1rem)] font-semibold leading-normal">{product.name}</h2>
          <p className="text-sm opacity-80">{product.description}</p>
        </div>
        <div className="mt-auto flex items-center justify-between px-4 pb-4">
          <span className="font-mono font-bold">
            {product.price.toLocaleString("sv-SE", { style: "currency", currency: "SEK", maximumFractionDigits: 0 })}
          </span>
        </div>
      </a>
      <a
        href="#"
        className="bg-lime-300 absolute bottom-2 right-2 rounded-md bg-opacity-90 p-3 transition hover:bg-green-700 hover:text-white"
      >
        <ShoppingCart size={16} />
      </a>
    </article>
  );
}
