import { StepForward, StepBack } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const BANNERS = [
  { link: "#", alt: "DJI", img: "dji.webp" },
  { link: "#", alt: "Inet", img: "inet.webp" },
  { link: "#", alt: "Inet 2", img: "inet2.jpg" },
  { link: "#", alt: "Thermaltake", img: "thermaltake.webp" },
];

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
      className={`${active ? "bg-white" : "bg-gray-950 bg-opacity-20 hover:bg-opacity-80"}
        transition-color h-4 w-4 cursor-pointer rounded-full duration-150`}
    ></div>
  );
}

export default function BannerCarousel() {
  const [page, setPage] = useState(0);
  const bannerContainerRef = useRef<HTMLDivElement>(document.createElement("div"));

  const DrawBanners = () => {
    const sliced = [...BANNERS.slice(page), ...BANNERS.slice(0, page)];

    return (
      <>
        {sliced.map((banner, i) => (
          <a
            href={banner.link}
            key={i}
            className="h-full w-full flex-shrink-0 bg-green-800 text-8xl font-black text-white"
          >
            <img src={`images/banner/${banner.img}`} alt={banner.alt} />
          </a>
        ))}
      </>
    );
  };

  const leftButtonHandler = () => {
    const animation = bannerContainerRef.current.animate([{ translate: "100%" }], { duration: 200, easing: "ease" });
    animation.play();
    animation.onfinish = () => setPage(page <= 0 ? BANNERS.length - 1 : page - 1);
  };
  const rightButtonHandler = () => {
    const animation = bannerContainerRef.current.animate([{ translate: "-100%" }], { duration: 200, easing: "ease" });
    animation.play();
    animation.onfinish = () => setPage(page >= BANNERS.length - 1 ? 0 : page + 1);
  };

  return (
    <section className="relative flex h-[240px] items-center justify-center overflow-hidden rounded-md">
      <div ref={bannerContainerRef} className="flex h-full w-full -translate-x-full">
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
