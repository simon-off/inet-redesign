import { StepForward, StepBack } from "lucide-react";
import { useState } from "react";

const banners = ["hej", "hejsan", "tjabba", "tjena", "hallå"];

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

function BannerCarousel() {
  const [page, setPage] = useState(0);

  const leftButtonHandler = () => {
    setPage(page <= 0 ? banners.length - 1 : page - 1);
  };
  const rightButtonHandler = () => {
    setPage(page >= banners.length - 1 ? 0 : page + 1);
  };

  return (
    <section className="relative flex h-[240px] items-center justify-center overflow-hidden rounded-md bg-gray-400">
      {banners.map(
        (word, i) =>
          i === page && (
            <div className="relative h-full w-full" key={i}>
              <div className="bg-teal-800 absolute grid h-full w-full -translate-x-full place-items-center">
                {banners[i <= 0 ? banners.length - 1 : i - 1]}
              </div>
              <div className="absolute grid h-full w-full place-items-center bg-gradient-to-t from-gray-400 to-gray-700 text-8xl font-black uppercase text-white">
                {word}
              </div>
              <div className="bg-teal-700 absolute grid h-full w-full translate-x-full place-items-center">
                {banners[i >= banners.length - 1 ? 0 : i + 1]}
              </div>
            </div>
          )
      )}
      <button
        onClick={leftButtonHandler}
        className="absolute bottom-0 left-0 top-0 bg-gray-950 bg-opacity-50 p-4 px-6 text-white opacity-20 transition-opacity hover:opacity-100"
      >
        <StepBack />
      </button>
      <button
        onClick={rightButtonHandler}
        className="absolute bottom-0 right-0 top-0 bg-gray-950 bg-opacity-50 p-4 px-6 text-white opacity-20 transition-opacity hover:opacity-100"
      >
        <StepForward />
      </button>
      <div className="absolute bottom-4 flex gap-3">
        {banners.map((_, i) =>
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

export default BannerCarousel;
