import {
  Cable,
  Computer,
  Disc,
  Gamepad,
  HardDrive,
  MemoryStick,
  Monitor,
  Mouse,
  Printer,
  Router,
  Smartphone,
  Speaker,
} from "lucide-react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemShelf from "./components/ItemShelf";
import ProductItem from "./components/cards/ProductCard";
import useFetch from "./hooks/useFetch";
import IProduct from "./types/IProduct";
import CategoryItem from "./components/cards/CategoryCard";
import ICategory from "./types/IProduct copy";
import ItemDrawer from "./components/ItemDrawer";
import BannerSlider from "./components/BannerSlider";

const CATEGORIES = [
  { name: "Datorer", icon: <Computer size={48} absoluteStrokeWidth strokeWidth={1.5} /> },
  { name: "Spelkonsoler", icon: <Gamepad size={48} absoluteStrokeWidth strokeWidth={1.5} /> },
  { name: "Bildskärmar", icon: <Monitor size={48} absoluteStrokeWidth strokeWidth={1.5} /> },
  { name: "Komponenter", icon: <MemoryStick size={48} absoluteStrokeWidth strokeWidth={1.5} /> },
  { name: "Datortillbehör", icon: <Mouse size={48} absoluteStrokeWidth strokeWidth={1.5} /> },
  { name: "Extern lagring", icon: <HardDrive size={48} absoluteStrokeWidth strokeWidth={1.5} /> },
  { name: "Kablar", icon: <Cable size={48} absoluteStrokeWidth strokeWidth={1.5} /> },
  { name: "Mobiltelefoner", icon: <Smartphone size={48} absoluteStrokeWidth strokeWidth={1.5} /> },
  { name: "Ljudsystem", icon: <Speaker size={48} absoluteStrokeWidth strokeWidth={1.5} /> },
  { name: "Nätverk", icon: <Router size={48} absoluteStrokeWidth strokeWidth={1.5} /> },
  { name: "Skrivare", icon: <Printer size={48} absoluteStrokeWidth strokeWidth={1.5} /> },
  { name: "Programvara", icon: <Disc size={48} absoluteStrokeWidth strokeWidth={1.5} /> },
];

export default function App() {
  const products = useFetch<IProduct[]>("data/mock-products.json");

  return (
    <div className="flex min-h-[100dvh] flex-col bg-gray-100 from-gray-950 to-transparent bg-[auto_100px] bg-no-repeat text-gray-800 dark:bg-gray-900 dark:bg-gradient-to-b dark:text-gray-200">
      <Header />
      <main className="mx-auto flex w-full max-w-screen-xl flex-1 flex-col gap-8 px-4 pb-16 pt-8">
        {/* <BannerCarousel /> */}
        <BannerSlider />
        <ItemDrawer heading="Populära kategorier">
          {CATEGORIES.map((category: ICategory, i: number) => (
            <CategoryItem category={category} key={i} />
          ))}
        </ItemDrawer>
        <ItemShelf heading="Kampanjer" link="#" visibleItems={5} error={products.error} loading={products.loading}>
          {products.data?.map((product: IProduct, i: number) => <ProductItem product={product} key={i} />)}
        </ItemShelf>
        <ItemShelf heading="Topplistan" link="#" visibleItems={4} error={products.error} loading={products.loading}>
          {products.data?.map((product: IProduct, i: number) => <ProductItem product={product} key={i} />)}
        </ItemShelf>
        <ItemShelf heading="Nya produkter" link="#" visibleItems={6} error={products.error} loading={products.loading}>
          {products.data?.map((product: IProduct, i: number) => <ProductItem product={product} key={i} />)}
        </ItemShelf>
      </main>
      <Footer />
    </div>
  );
}
