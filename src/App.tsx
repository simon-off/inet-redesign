import BannerCarousel from "./components/BannerCarousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemShelf from "./components/ItemShelf";
import ProductItem from "./components/shelf-items/ProductItem";
import useFetch from "./hooks/useFetch";
import IProduct from "./types/IProduct";

export default function App() {
  const products = useFetch("data/mock-products.json");

  return (
    <div className="flex min-h-[100dvh] flex-col bg-gray-100 from-gray-950 to-transparent bg-[auto_100px] bg-no-repeat text-gray-800 dark:bg-gray-900 dark:bg-gradient-to-b dark:text-gray-200">
      <Header />
      <main className="mx-auto flex w-full max-w-screen-xl flex-1 flex-col gap-8 px-4 pb-16 pt-8">
        <BannerCarousel />
        <ItemShelf error={products.error} loading={products.loading} heading="Kampanjer" link="#" visibleItems={5}>
          {products.data?.map((product: IProduct, i: number) => <ProductItem product={product} key={i} />)}
        </ItemShelf>
        <ItemShelf error={products.error} loading={products.loading} heading="Bästsäljare" link="#" visibleItems={4}>
          {products.data?.map((product: IProduct, i: number) => <ProductItem product={product} key={i} />)}
        </ItemShelf>
        <ItemShelf error={products.error} loading={products.loading} heading="Nya produkter" link="#" visibleItems={6}>
          {products.data?.map((product: IProduct, i: number) => <ProductItem product={product} key={i} />)}
        </ItemShelf>
      </main>
      <Footer />
    </div>
  );
}
