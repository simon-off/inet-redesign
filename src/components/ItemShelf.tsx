import { useRef, useState } from "react";
import useFetch from "../hooks/useFetch";
import IProduct from "../types/IProduct";
import ShelfItem from "./ShelfItem";

interface IProps {
  heading: string;
  link: string;
  fetchURL: string;
  visibleItems: number;
}

enum ScrollLocations {
  Left,
  Middle,
  Right,
}

function ItemShelf(props: IProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollLocation, setScrollLocation] = useState<ScrollLocations>(ScrollLocations.Left);
  const { data, error, loading } = useFetch(`data/${props.fetchURL}`);

  const scrollButtonHandler = (direction: number) => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const containerWidth = scrollRef.current.scrollWidth;
      const visibleWidth = scrollRef.current.offsetWidth;
      const scrollAmount = scrollRef.current.querySelector("article")?.offsetWidth ?? 0;

      if (scrollPosition <= scrollAmount) {
        setScrollLocation(ScrollLocations.Left);
      } else if (scrollPosition >= containerWidth - (visibleWidth + scrollAmount)) {
        setScrollLocation(ScrollLocations.Right);
      } else {
        setScrollLocation(ScrollLocations.Middle);
      }

      // TODO: Updates one click behind.

      scrollRef.current.scroll({
        left: scrollPosition + scrollAmount * direction,
        behavior: "smooth",
      });
    }
  };

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
        <h2 className="text-red-700 font-semibold pb-2">Could not fetch the correct data...</h2>
        <p className="text-stone-700 text-sm">{JSON.stringify(error.message)}</p>
      </section>
    );
  }

  if (data)
    return (
      <section>
        <div className="flex justify-between items-center gap-4 pb-2 text-stone-500">
          <a href={props.link}>
            <h2 className="uppercase font-semibold  hover:text-blue-500">{props.heading}</h2>
          </a>
          <div className="h-[1px] flex-1 bg-stone-300"></div>
          <a href={props.link} className="underline text-sm">
            Visa alla
          </a>
        </div>
        <div className="relative">
          <div
            ref={scrollRef}
            className="grid grid-flow-col gap-[12px] snap-x items-center overflow-x-auto"
            style={{
              gridAutoColumns: `calc((${100 / props.visibleItems}% - 12px) + (12px / ${props.visibleItems}))`,
              scrollbarWidth: "none",
            }}
          >
            <button
              onClick={() => scrollButtonHandler(-1)}
              className={`absolute left-2 top-2 bottom-2 p-4 text-xl rounded-lg opacity-30 transition-colors ${
                scrollLocation !== ScrollLocations.Left
                  ? "opacity-100 bg-black bg-opacity-[0.15] hover:opacity-100 hover:bg-opacity-30"
                  : "cursor-default"
              }`}
            >
              👈
            </button>
            <button
              onClick={() => scrollButtonHandler(1)}
              className={`absolute right-2 top-2 bottom-2 p-4 text-xl rounded-lg opacity-30 transition-colors ${
                scrollLocation !== ScrollLocations.Right
                  ? "opacity-100 bg-black bg-opacity-[0.15] hover:opacity-100 hover:bg-opacity-30"
                  : "cursor-default"
              }`}
            >
              👉
            </button>
            {data.map((product: IProduct, i: number) => (
              <ShelfItem product={product} key={i} />
            ))}
          </div>
        </div>
      </section>
    );
}

export default ItemShelf;
