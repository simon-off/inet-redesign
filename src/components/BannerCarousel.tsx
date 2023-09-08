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
      className={`${active ? "bg-white bg-opacity-100" : "bg-black"}
        cursor-pointer rounded-full bg-opacity-75 border w-4 h-4`}
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
    <section className="h-[240px] bg-stone-400 relative flex justify-center items-center overflow-hidden">
      {banners.map(
        (word, i) =>
          i === page && (
            <div className="w-full h-full relative">
              <div className="absolute -translate-x-full bg-teal-800 grid place-items-center w-full h-full">
                {banners[i <= 0 ? banners.length - 1 : i - 1]}
              </div>
              <div className="absolute text-white text-8xl uppercase font-black bg-gradient-to-t from-stone-700 to-stone-500 grid place-items-center w-full h-full">
                {word}
              </div>
              <div className="absolute translate-x-full bg-teal-700 grid place-items-center w-full h-full">
                {banners[i >= banners.length - 1 ? 0 : i + 1]}
              </div>
            </div>
          )
      )}
      <button
        onClick={leftButtonHandler}
        className="absolute h-full top-0 left-0 hover:bg-black hover:bg-opacity-10 p-4 text-2xl"
      >
        ◀
      </button>
      <button
        onClick={rightButtonHandler}
        className="absolute h-full top-0 right-0 hover:bg-black hover:bg-opacity-10 p-4 text-2xl"
      >
        ▶
      </button>
      <div className="flex gap-2 absolute bottom-4">
        {banners.map((_, i) =>
          i === page ? (
            <PageButton i={i} active={true} setPage={setPage} />
          ) : (
            <PageButton i={i} active={false} setPage={setPage} />
          )
        )}
      </div>
    </section>
  );
}

export default BannerCarousel;
