import { useState } from "react";

const banners = ["hej", "hejdå", "hejsan", "hoppla", "hoop"];

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
      className={`${active ? "bg-blue-500 bg-opacity-100" : "bg-black"}
        rounded-full bg-opacity-75 border w-4 h-4`}
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
    <section className="h-[240px] bg-stone-400 relative flex justify-center items-center">
      {banners.map((word, i) => i === page && <div>{word}</div>)}
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
