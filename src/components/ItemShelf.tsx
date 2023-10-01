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

// The gap between items in pixels
const GAP = 12;

function ItemShelf(props: IProps) {
  // Fetch items to display using custom Fetch Hook
  const { data, error, loading } = useFetch(`data/${props.fetchURL}`);

  // State and ref for horizontal scrolling functionality
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollLocation, setScrollLocation] = useState<ScrollLocations>(ScrollLocations.Left);

  const scrollButtonHandler = (direction: number) => {
    if (!scrollRef.current) return;

    const scrollPosition = scrollRef.current.scrollLeft;
    const totalWidth = scrollRef.current.scrollWidth;
    const visibleWidth = scrollRef.current.offsetWidth;

    scrollRef.current.scroll({
      left: scrollPosition + visibleWidth * direction,
      behavior: "smooth",
    });

    if (scrollPosition <= visibleWidth) {
      setScrollLocation(ScrollLocations.Left);
    } else if (scrollPosition + visibleWidth >= totalWidth) {
      setScrollLocation(ScrollLocations.Right);
    } else {
      setScrollLocation(ScrollLocations.Middle);
    }
  };

  // TODO: Fix the scrolling...

  // RENDERING for error state
  if (error && error instanceof Error) {
    return (
      <section>
        <h2 className="pb-2 font-mono font-semibold uppercase opacity-80">Something went wrong</h2>
        <div className="rounded-md bg-white p-4 pb-6 shadow-sm dark:bg-gray-900">
          <h2 className="text-red-500 pb-2">Could not fetch the correct data...</h2>
          <p className="text-sm opacity-75">{JSON.stringify(error.message)}</p>
        </div>
      </section>
    );
  }

  // RENDERING for loading or successful data fetch
  return (
    <section>
      <div className="flex items-center justify-between gap-4 pb-2 font-mono uppercase">
        <a href={props.link}>
          <h2 className="font-semibold uppercase opacity-80 hover:text-blue-400 hover:opacity-100">{props.heading}</h2>
        </a>
        <div className="h-[1px] flex-1 bg-gray-400 bg-opacity-30"></div>
        <a href={props.link} className="text-sm underline hover:text-blue-400">
          Visa alla
        </a>
      </div>
      {loading || !data ? (
        <div className="min-h-[360px] rounded-md bg-white p-4 shadow-sm dark:bg-gray-900">
          <h2>Loading...</h2>
        </div>
      ) : (
        <div className="relative">
          <div
            ref={scrollRef}
            className={`grid snap-x grid-flow-col items-center overflow-x-scroll`}
            style={{
              gap: `${GAP}px`,
              gridAutoColumns: `calc((${100 / props.visibleItems}% - ${GAP}px) + (${GAP}px / ${props.visibleItems}))`,
              scrollbarWidth: "none",
            }}
          >
            <button
              onClick={() => scrollButtonHandler(-1)}
              className={`absolute bottom-2 left-2 top-2 rounded-lg p-4 text-xl opacity-30 transition-opacity ${
                scrollLocation !== ScrollLocations.Left
                  ? "bg-black bg-opacity-30 opacity-100 hover:opacity-100"
                  : "pointer-events-none"
              }`}
            >
              👈
            </button>
            <button
              onClick={() => scrollButtonHandler(1)}
              className={`absolute bottom-2 right-2 top-2 rounded-lg p-4 text-xl opacity-30 transition-opacity ${
                scrollLocation !== ScrollLocations.Right
                  ? "bg-black bg-opacity-30 opacity-100 hover:opacity-100"
                  : "pointer-events-none"
              }`}
            >
              👉
            </button>
            {data.map((product: IProduct, i: number) => (
              <ShelfItem product={product} key={i} index={i} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default ItemShelf;
