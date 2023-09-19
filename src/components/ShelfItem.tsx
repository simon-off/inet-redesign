import IProduct from "../types/IProduct";

function ShelfItem({ product }: { product: IProduct }) {
  return (
    <article className="text-stone-800 border border-r-0 rounded-lg shadow-md overflow-hidden bg-white snap-start h-full flex flex-col">
      <div className="bg-gradient-to-br from-stone-400 to-stone-100 h-36 p-2">
        <img
          src={`images/${product.image}`}
          alt={product.name}
          className="h-full mx-auto"
        />
      </div>
      <div className="p-4">
        <h2 className="font-semibold leading-tight line-clamp-2 mb-2 text-stone-950">
          {product.name}
        </h2>
        <p className="text-sm">{product.description}</p>
      </div>
      <div className="px-4 pb-4 mt-auto flex justify-between items-center">
        <span className="font-bold">
          {product.price} {product.price && "kr"}
        </span>
        <button className="">🛒</button>
      </div>
    </article>
  );
}

export default ShelfItem;
