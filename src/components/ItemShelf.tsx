import { StepForward, StepBack } from "lucide-react";
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
  const scrollRef = useRef<HTMLDivElement>(document.createElement("div"));
  const [scrollLocation, setScrollLocation] = useState<ScrollLocations>(ScrollLocations.Left);

  const handleScrollButtonClick = (direction: number) => {
    const ref = scrollRef.current;

    ref.scroll({
      left: ref.scrollLeft + ref.offsetWidth * direction,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const ref = scrollRef.current;
    const activationPadding = 20;

    if (ref.scrollLeft < activationPadding) {
      setScrollLocation(ScrollLocations.Left);
    } else if (ref.scrollLeft + ref.offsetWidth >= ref.scrollWidth - activationPadding) {
      setScrollLocation(ScrollLocations.Right);
    } else {
      setScrollLocation(ScrollLocations.Middle);
    }
  };

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
          <h2 className="link font-semibold uppercase opacity-80 hover:opacity-100">{props.heading}</h2>
        </a>
        <div className="h-[1px] flex-1 bg-gray-400 bg-opacity-30"></div>
        <a href={props.link} className="link text-sm">
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
            onScroll={handleScroll}
            ref={scrollRef}
            className={`grid snap-x grid-flow-col items-center overflow-x-scroll`}
            style={{
              gap: `${GAP}px`,
              gridAutoColumns: `calc((${100 / props.visibleItems}% - ${GAP}px) + (${GAP}px / ${props.visibleItems}))`,
              scrollbarWidth: "none",
            }}
          >
            <button
              tabIndex={-1}
              disabled={scrollLocation === ScrollLocations.Left}
              onClick={() => handleScrollButtonClick(-1)}
              className={`absolute left-2 z-10 rounded-lg bg-gray-950 bg-opacity-20 p-4 opacity-50 transition-opacity duration-500 hover:duration-150 dark:bg-opacity-50 ${
                scrollLocation === ScrollLocations.Left
                  ? "opacity-0 hover:opacity-20 focus-visible:opacity-20"
                  : "hover:opacity-100 focus-visible:opacity-100"
              }`}
            >
              <StepBack />
            </button>
            <button
              tabIndex={-1}
              disabled={scrollLocation === ScrollLocations.Right}
              onClick={() => handleScrollButtonClick(1)}
              className={`absolute right-2 z-10 rounded-lg bg-gray-950 bg-opacity-20 p-4 opacity-50 transition-opacity duration-500 hover:duration-150 dark:bg-opacity-50 ${
                scrollLocation === ScrollLocations.Right
                  ? "opacity-0 hover:opacity-20 focus-visible:opacity-20"
                  : "hover:opacity-100 focus-visible:opacity-100"
              }`}
            >
              <StepForward />
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
