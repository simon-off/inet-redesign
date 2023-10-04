import { StepForward, StepBack } from "lucide-react";
import { useRef, useState } from "react";

const BANNERS = [
  { link: "#", alt: "DJI Mini 4 Pro", imgDesktop: "dji.jpg", imgMobile: "dji-mobile.jpg" },
  { link: "#", alt: "Microsoft Surface Pro", imgDesktop: "microsoft.webp", imgMobile: "microsoft-mobile.webp" },
  { link: "#", alt: "SteelSeries Alias", imgDesktop: "steelseries.webp", imgMobile: "steelseries-mobile.webp" },
  { link: "#", alt: "Fractal Design Terra", imgDesktop: "fractal.jpg", imgMobile: "fractal-mobile.jpg" },
] as const;

function PageButton({
  i,
  active,
  setPage,
}: {
  i: number;
  active: boolean;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div
      onClick={() => setPage(i)}
      className={`${active ? "bg-gray-50" : "bg-gray-950 opacity-40 hover:opacity-80"}
        transition-color h-4 w-4 cursor-pointer rounded-full border border-gray-50 duration-150`}
    ></div>
  );
}

export default function BannerCarousel() {
  const [page, setPage] = useState(0);
  const bannerContainerRef = useRef<HTMLDivElement>(document.createElement("div"));

  const DrawBanners = () => {
    return (
      <>
        {BANNERS.map((banner, i) => (
          <a
            href={banner.link}
            key={i}
            className="h-full w-full flex-shrink-0 bg-green-800 text-8xl font-black text-white"
          >
            <picture>
              <source media="(min-width: 640px)" srcSet={`images/banner/${banner.imgDesktop}`} />
              <img src={`images/banner/${banner.imgMobile}`} alt={banner.alt} />
            </picture>
          </a>
        ))}
      </>
    );
  };

  const leftButtonHandler = () => {
    setPage(page <= 0 ? BANNERS.length - 1 : page - 1);
  };
  const rightButtonHandler = () => {
    setPage(page >= BANNERS.length - 1 ? 0 : page + 1);
  };

  return (
    <section className="relative flex items-center justify-center overflow-hidden md:mx-4 md:mt-8 md:rounded-md">
      <div
        ref={bannerContainerRef}
        className="transition-translate flex h-full w-full"
        style={{ translate: `-${page * 100}%` }}
      >
        <DrawBanners />
      </div>
      <button
        onClick={leftButtonHandler}
        className="absolute bottom-0 left-0 top-0 bg-gray-950 bg-opacity-50 p-4 px-6 text-white opacity-20 transition-opacity hover:opacity-100 focus-visible:opacity-100"
      >
        <StepBack />
      </button>
      <button
        onClick={rightButtonHandler}
        className="absolute bottom-0 right-0 top-0 bg-gray-950 bg-opacity-50 p-4 px-6 text-white opacity-20 transition-opacity hover:opacity-100 focus-visible:opacity-100"
      >
        <StepForward />
      </button>
      <div className="absolute bottom-4 flex gap-3">
        {BANNERS.map((_, i) =>
          i === page ? (
            <PageButton key={i} i={i} active={true} setPage={setPage} />
          ) : (
            <PageButton key={i} i={i} active={false} setPage={setPage} />
          )
        )}
      </div>
    </section>
  );
}
