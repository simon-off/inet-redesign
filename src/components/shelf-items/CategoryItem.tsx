import ICategory from "../../types/IProduct copy";

export default function CategoryItem({ category }: { category: ICategory }) {
  return (
    <article className="snap-start flex-col rounded-md border border-gray-300 bg-white shadow-[inset_0_0_32px_rgba(100,150,200,0.05)] dark:border-gray-700 dark:bg-gray-800">
      <a
        href="#"
        className="flex h-full flex-col items-center gap-4 rounded-md p-4 transition-colors duration-[50ms] hover:text-blue-500"
      >
        <div>{category.icon}</div>
        <h2>{category.name}</h2>
      </a>
    </article>
  );
}
