import "./App.css";
import BannerCarousel from "./components/BannerCarousel";
import Header from "./components/Header";
import ItemShelf from "./components/ItemShelf";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-screen-xl mx-auto px-4 py-8 flex flex-col gap-8">
        <BannerCarousel />
        <ItemShelf
          heading="Kampanjer"
          link="#"
          visibleItems={5}
          fetchURL="mock-products.json"
        />
        <ItemShelf
          heading="Stoff osv"
          link="#"
          visibleItems={4}
          fetchURL="mock-products.json"
        />
        <ItemShelf
          heading="Bra skit"
          link="#"
          visibleItems={6}
          fetchURL="mock-products.json"
        />
      </main>
    </>
  );
}

export default App;
