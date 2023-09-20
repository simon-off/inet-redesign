import IProduct from "../types/IProduct";

function ShelfItem({ product }: { product: IProduct }) {
  return (
    <article className="flex h-full snap-start flex-col overflow-hidden rounded-lg border border-r-0 bg-white text-stone-800 shadow-md">
      <div className="h-36 bg-gradient-to-br from-stone-400 to-stone-100 p-2">
        <img src={`images/${product.image}`} alt={product.name} className="mx-auto h-full" />
      </div>
      <div className="p-4">
        <h2 className="mb-2 line-clamp-2 font-semibold leading-tight text-stone-950">{product.name}</h2>
        <p className="text-sm">{product.description}</p>
      </div>
      <div className="mt-auto flex items-center justify-between px-4 pb-4">
        <span className="font-bold">
          {product.price} {product.price && "kr"}
        </span>
        <button className="">🛒</button>
      </div>
    </article>
  );
}

export default ShelfItem;
