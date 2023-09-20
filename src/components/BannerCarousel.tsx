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
        h-4 w-4 cursor-pointer rounded-full border bg-opacity-75`}
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
    <section className="relative flex h-[240px] items-center justify-center overflow-hidden rounded-md bg-stone-400">
      {banners.map(
        (word, i) =>
          i === page && (
            <div className="relative h-full w-full" key={i}>
              <div className="absolute grid h-full w-full -translate-x-full place-items-center bg-teal-800">
                {banners[i <= 0 ? banners.length - 1 : i - 1]}
              </div>
              <div className="absolute grid h-full w-full place-items-center bg-gradient-to-t from-stone-400 to-stone-600 text-8xl font-black uppercase text-white">
                {word}
              </div>
              <div className="absolute grid h-full w-full translate-x-full place-items-center bg-teal-700">
                {banners[i >= banners.length - 1 ? 0 : i + 1]}
              </div>
            </div>
          )
      )}
      <button
        onClick={leftButtonHandler}
        className="absolute bottom-2 left-2 top-2 rounded-lg p-4 text-xl opacity-30 transition-colors hover:bg-black hover:bg-opacity-30 hover:opacity-100"
      >
        👈
      </button>
      <button
        onClick={rightButtonHandler}
        className="absolute bottom-2 right-2 top-2 rounded-lg p-4 text-xl opacity-30 transition-colors hover:bg-black hover:bg-opacity-30 hover:opacity-100"
      >
        👉
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
