import ShelfItem from "./ShelfItem";

interface IProps {
  heading: string;
  link: string;
}

function ItemShelf(props: IProps) {
  return (
    <section>
      <div className="flex justify-between items-center gap-4 pb-2">
        <a href={props.link}>
          <h2 className="font-bold hover:text-blue-500">{props.heading}</h2>
        </a>
        <div className="h-[1px] flex-1 bg-stone-300"></div>
        <a href={props.link} className="underline text-sm">
          Visa alla
        </a>
      </div>
      <div
        className="relative grid grid-flow-col snap-x items-center scroll"
        style={{ gridAutoColumns: "calc(20% - .2px)" }}
      >
        {/* <button className="absolute left-0 p-4 text-xl">👈</button>
        <button className="absolute right-0 p-4 text-xl">👉</button> */}
        <ShelfItem
          title="AMD Ryzen 7 7800X3D 4.2GHz 104MB"
          description="8-kärnig processor med 3D V-Cache"
          price={2000}
        />
        <ShelfItem
          title="Kingston Fury Renegade M.2 NVMe SSD Gen 4 2TB"
          description="Skyhöga hastigheter för gamers och proffsanvändare"
          price={2000}
        />
        <ShelfItem
          title="Samsung 990 PRO M.2 NVMe SSD 2TB"
          description="Disken för gamers och proffsanvändare"
          price={2000}
        />
        <ShelfItem
          title="Acer Nitro N50-640 - i5 | 16GB | 512GB | RTX 3060 Ti"
          price={2000}
          description="Kompakt gamingdator"
        />
        <ShelfItem
          title="Lenovo Legion Go"
          description="Handhåller gamingdator med högupplöst skärm"
          price={2000}
        />
      </div>
    </section>
  );
}

export default ItemShelf;
