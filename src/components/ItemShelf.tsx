import { StepForward, StepBack } from "lucide-react";
import { ReactNode, useRef, useState } from "react";
import SectionError from "./SectionError";
import SectionLoading from "./SectionLoading";
import ItemShelfButton from "./ItemShelfButton";
import Direction from "../types/Direction";

interface IProps {
  children: ReactNode;
  error?: Error | null;
  loading?: boolean;
  heading: string;
  link: string;
  visibleItems: number;
}

enum ScrollLocations {
  Left,
  Middle,
  Right,
}

// The gap between items in pixels
const GAP = 12;

export default function ItemShelf(props: IProps) {
  // State and ref for horizontal scrolling functionality
  const scrollRef = useRef<HTMLDivElement>(document.createElement("div"));
  const [scrollLocation, setScrollLocation] = useState<ScrollLocations>(ScrollLocations.Left);

  const handleScrollButtonClick = (direction: Direction) => {
    const ref = scrollRef.current;

    ref.scroll({
      left: ref.scrollLeft + ref.offsetWidth * (direction === Direction.Left ? -1 : 1),
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const ref = scrollRef.current;
    // Controls how far from the edge of the container (in pixels) the scroll buttons are enabled/disabled.
    const activationPadding = 100;

    if (ref.scrollLeft < activationPadding) {
      setScrollLocation(ScrollLocations.Left);
    } else if (ref.scrollLeft + ref.offsetWidth >= ref.scrollWidth - activationPadding) {
      setScrollLocation(ScrollLocations.Right);
    } else {
      setScrollLocation(ScrollLocations.Middle);
    }
  };

  // RETURN if error
  if (props.error) {
    return <SectionError error={props.error} />;
  }

  // RETURN if loading
  if (props.loading) {
    return <SectionLoading />;
  }

  // RETURN if success
  return (
    <section className="px-4">
      <div className="flex items-center justify-between gap-4 pb-2 font-mono uppercase">
        <a href={props.link}>
          <h2 className="link font-semibold uppercase opacity-80 hover:opacity-100">{props.heading}</h2>
        </a>
        <div className="h-[1px] flex-1 bg-gray-400 bg-opacity-30"></div>
        <a href={props.link} className="link text-sm">
          Visa alla
        </a>
      </div>
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
          <ItemShelfButton
            disabled={scrollLocation === ScrollLocations.Left}
            direction={Direction.Left}
            onClick={() => handleScrollButtonClick(Direction.Left)}
          >
            <StepBack />
          </ItemShelfButton>
          <ItemShelfButton
            disabled={scrollLocation === ScrollLocations.Right}
            direction={Direction.Right}
            onClick={() => handleScrollButtonClick(Direction.Right)}
          >
            <StepForward />
          </ItemShelfButton>
          {props.children}
        </div>
      </div>
    </section>
  );
}
