import "./App.css";
import BannerCarousel from "./components/BannerCarousel";
import Header from "./components/Header";
import ItemShelf from "./components/ItemShelf";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-screen-xl mx-auto px-4 py-2 flex flex-col gap-4">
        <BannerCarousel />
        <ItemShelf heading="Kampanjer" link="#" />
        <ItemShelf heading="Andra grejer" link="#" />
        <ItemShelf heading="Bra skit" link="#" />
      </main>
    </>
  );
}

export default App;
