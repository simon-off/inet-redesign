interface IProps {
  title?: string;
  description?: string;
  price?: number;
  link?: string;
  isProduct?: boolean;
}

function ShelfItem(props: IProps) {
  return (
    <article className="border border-r-0 bg-white p-1 snap-start h-full flex flex-col">
      <div className="bg-gradient-to-br from-stone-400 to-stone-300 h-36"></div>
      <div className="p-2">
        <h2 className="font-semibold leading-tight pb-2">{props.title}</h2>
        <p className="text-xs">{props.description}</p>
      </div>
      <div className="px-2 pb-2 mt-auto flex justify-between items-center">
        <span className="font-bold">
          {props.price} {props.price && "kr"}
        </span>
        <button className="border border-stone-500 p-1 rounded-sm">🛒</button>
      </div>
    </article>
  );
}

export default ShelfItem;
