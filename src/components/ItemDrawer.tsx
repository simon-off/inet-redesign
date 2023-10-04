import { ReactNode, useRef, useState } from "react";
import SectionError from "./SectionError";
import SectionLoading from "./SectionLoading";
import { ChevronDown } from "lucide-react";

interface IProps {
  children: ReactNode;
  error?: Error | null;
  loading?: boolean;
  heading: string;
  link?: string;
}

// The gap between items in pixels
const GAP = 12;

export default function ItemDrawer(props: IProps) {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(document.createElement("div"));

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
        <h2 className="font-semibold uppercase opacity-80">{props.heading}</h2>
        <div className="h-[1px] flex-1 bg-gray-400 bg-opacity-30"></div>
        <button onClick={() => setOpen(!open)} className="link flex items-center gap-2 text-sm">
          Visa fler <ChevronDown className={`${open ? "rotate-180" : ""}`} aria-hidden="true" />
        </button>
      </div>
      <div className="relative">
        <div
          ref={drawerRef}
          className="motion-safe grid grid-cols-[repeat(auto-fit,minmax(calc(135px),1fr))] transition-max-height duration-300 md:grid-cols-[repeat(auto-fit,minmax(calc(180px),1fr))]"
          style={{
            gap: `${GAP}px`,
            overflowY: "hidden",
            maxHeight:
              !open && drawerRef.current.firstChild instanceof HTMLElement
                ? drawerRef.current.firstChild.offsetHeight
                : drawerRef.current.scrollHeight,
          }}
        >
          {props.children}
        </div>
      </div>
    </section>
  );
}
