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
      <section className="rounded-md bg-white p-4 shadow-sm">
        <h2 className="pb-2 font-semibold">Loading...</h2>
      </section>
    );
  }

  if (error && error instanceof Error) {
    return (
      <section className="rounded-md bg-white p-4 shadow-sm">
        <h2 className="pb-2 font-semibold text-red-700">Could not fetch the correct data...</h2>
        <p className="text-sm text-stone-700">{JSON.stringify(error.message)}</p>
      </section>
    );
  }

  if (data)
    return (
      <section>
        <div className="flex items-center justify-between gap-4 pb-2 text-stone-500">
          <a href={props.link}>
            <h2 className="font-semibold uppercase  hover:text-blue-500">{props.heading}</h2>
          </a>
          <div className="h-[1px] flex-1 bg-stone-300"></div>
          <a href={props.link} className="text-sm underline">
            Visa alla
          </a>
        </div>
        <div className="relative">
          <div
            ref={scrollRef}
            className="grid snap-x grid-flow-col items-center gap-[12px] overflow-x-auto"
            style={{
              gridAutoColumns: `calc((${100 / props.visibleItems}% - 12px) + (12px / ${props.visibleItems}))`,
              scrollbarWidth: "none",
            }}
          >
            <button
              onClick={() => scrollButtonHandler(-1)}
              className={`absolute bottom-2 left-2 top-2 rounded-lg p-4 text-xl opacity-30 transition-colors ${
                scrollLocation !== ScrollLocations.Left
                  ? "bg-black bg-opacity-[0.15] opacity-100 hover:bg-opacity-30 hover:opacity-100"
                  : "cursor-default"
              }`}
            >
              👈
            </button>
            <button
              onClick={() => scrollButtonHandler(1)}
              className={`absolute bottom-2 right-2 top-2 rounded-lg p-4 text-xl opacity-30 transition-colors ${
                scrollLocation !== ScrollLocations.Right
                  ? "bg-black bg-opacity-[0.15] opacity-100 hover:bg-opacity-30 hover:opacity-100"
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
