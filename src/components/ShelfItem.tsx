import IProduct from "../types/IProduct";

function ShelfItem({ product }: { product: IProduct }) {
  return (
    <article className="flex h-full snap-start flex-col overflow-hidden rounded-md border border-gray-300 bg-white shadow-[inset_0_0_32px_rgba(100,150,200,0.05)] dark:border-gray-700 dark:bg-gray-800">
      <div className="h-48 p-4">
        <img src={`images/${product.image}`} alt={product.name} className="mx-auto h-full" />
      </div>
      <div className="p-4">
        <h2 className="mb-2 line-clamp-2 font-semibold leading-tight">{product.name}</h2>
        <p className="text-sm opacity-80">{product.description}</p>
      </div>
      <div className="mt-auto flex items-center justify-between px-4 pb-4">
        <span className="font-mono font-bold">
          {product.price} {product.price && "kr"}
        </span>
        <button className="">🛒</button>
      </div>
    </article>
  );
}

export default ShelfItem;
