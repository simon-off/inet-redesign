import IArticle from "../../types/IArticle";

export default function ArticleCard({ article }: { article: IArticle }) {
  return (
    <article className="relative h-full snap-start flex-col overflow-hidden rounded-md border border-gray-300 bg-white shadow-[inset_0_0_32px_rgba(100,150,200,0.05)] dark:border-gray-700 dark:bg-gray-800">
      <a className="link group flex h-full flex-col rounded-md">
        <div className="h-48">
          <img
            src={`images/articles/${article.image}`}
            alt={article.title}
            className="mx-auto h-full w-full object-cover"
          />
        </div>
        <div className="p-4 transition-colors duration-[50ms] group-hover:text-blue-500">
          <h2 className="mb-1 line-clamp-2 font-semibold leading-normal">{article.title}</h2>
          <p className="text-sm opacity-80">{article.description}</p>
        </div>
        <div className="mt-auto items-center justify-between px-4 pb-4">
          <p className="font-mono text-sm opacity-80">{article.date}</p>
        </div>
      </a>
    </article>
  );
}
