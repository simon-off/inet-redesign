import "./App.css";
import BannerCarousel from "./components/BannerCarousel";
import Header from "./components/Header";
import ItemShelf from "./components/ItemShelf";

function App() {
  return (
    <div className="dark bg-stone-100 text-stone-800 dark:bg-stone-800 dark:text-stone-100">
      <Header />
      <main className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-8">
        <BannerCarousel />
        <ItemShelf heading="Kampanjer" link="#" visibleItems={5} fetchURL="mock-products.json" />
        <ItemShelf heading="Stoff osv" link="#" visibleItems={4} fetchURL="mock-products.json" />
        <ItemShelf heading="Bra skit" link="#" visibleItems={6} fetchURL="mock-products.json" />
      </main>
    </div>
  );
}

export default App;
