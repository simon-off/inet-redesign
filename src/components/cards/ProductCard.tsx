import { ShoppingCart } from "lucide-react";
import IProduct from "../../types/IProduct";
import { useContext } from "react";
import { CompanyContext } from "../../App";

export default function ProductItem({ product }: { product: IProduct }) {
  const { companyMode } = useContext(CompanyContext);

  return (
    <article className="relative h-full snap-start flex-col rounded-md border border-gray-300 bg-white shadow-[inset_0_0_32px_rgba(100,150,200,0.05)] dark:border-gray-700 dark:bg-gray-800">
      <a href="#" className="group flex h-full flex-col rounded-md">
        <div className="h-48 p-4">
          <img src={`images/products/${product.image}`} alt={product.name} className="mx-auto h-full object-contain" />
        </div>
        <div className="p-4 transition-colors duration-[50ms] group-hover:text-blue-500">
          <h2 className="mb-1 line-clamp-2 min-h-[calc(2em+1rem)] font-semibold leading-normal">{product.name}</h2>
          <p className="text-sm opacity-80">{product.description}</p>
        </div>
        <div
          className="mt-auto items-center justify-between px-4"
          style={{ paddingBottom: companyMode ? "1rem" : "1rem" }}
        >
          <p className="font-mono font-bold">
            {(product.price * (companyMode ? 0.8 : 1)).toLocaleString("sv-SE", {
              style: "currency",
              currency: "SEK",
              maximumFractionDigits: 0,
            })}
          </p>
          <p className="font-mono text-xs leading-none opacity-75" style={{ display: companyMode ? "block" : "none" }}>
            Exkl. moms
          </p>
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
