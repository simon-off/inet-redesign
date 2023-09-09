import useFetch from "../hooks/useFetch";
import IProduct from "../types/IProduct";
import ShelfItem from "./ShelfItem";

interface IProps {
  heading: string;
  link: string;
  fetchURL: string;
  visibleItems: number;
}

function ItemShelf(props: IProps) {
  const { data, error, loading } = useFetch(`data/${props.fetchURL}`);

  if (loading) {
    return (
      <section className="bg-white rounded-md p-4 shadow-sm">
        <h2 className="font-semibold pb-2">Loading...</h2>
      </section>
    );
  }

  if (error && error instanceof Error) {
    return (
      <section className="bg-white rounded-md p-4 shadow-sm">
        <h2 className="text-red-700 font-semibold pb-2">
          Could not fetch the correct data...
        </h2>
        <p className="text-stone-700 text-sm">
          {JSON.stringify(error.message)}
        </p>
      </section>
    );
  }

  if (data)
    return (
      <section>
        <div className="flex justify-between items-center gap-4 pb-2 text-stone-500">
          <a href={props.link}>
            <h2 className="uppercase font-semibold  hover:text-blue-500">
              {props.heading}
            </h2>
          </a>
          <div className="h-[1px] flex-1 bg-stone-300"></div>
          <a href={props.link} className="underline text-sm">
            Visa alla
          </a>
        </div>
        <div
          className="relative grid grid-flow-col gap-[12px] snap-x items-center scroll overflow-x-scroll"
          style={{
            gridAutoColumns: `calc(${100 / props.visibleItems}% - 10px)`,
          }}
        >
          {/* <button className="absolute left-0 p-4 text-xl">👈</button>
        <button className="absolute right-0 p-4 text-xl">👉</button> */}
          {data.map((product: IProduct, i: number) => (
            <ShelfItem product={product} key={i} />
          ))}
        </div>
      </section>
    );
}

export default ItemShelf;
