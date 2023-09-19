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
    <section className="h-[240px] rounded-md bg-stone-400 relative flex justify-center items-center overflow-hidden">
      {banners.map(
        (word, i) =>
          i === page && (
            <div className="w-full h-full relative" key={i}>
              <div className="absolute -translate-x-full bg-teal-800 grid place-items-center w-full h-full">
                {banners[i <= 0 ? banners.length - 1 : i - 1]}
              </div>
              <div className="absolute text-white text-8xl uppercase font-black bg-gradient-to-t from-stone-400 to-stone-600 grid place-items-center w-full h-full">
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
        className="absolute left-2 top-2 bottom-2 p-4 text-xl rounded-lg opacity-30 transition-colors hover:bg-black hover:opacity-100 hover:bg-opacity-30"
      >
        👈
      </button>
      <button
        onClick={rightButtonHandler}
        className="absolute right-2 top-2 bottom-2 p-4 text-xl rounded-lg opacity-30 transition-colors hover:bg-black hover:opacity-100 hover:bg-opacity-30"
      >
        👉
      </button>
      <div className="flex gap-3 absolute bottom-4">
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
