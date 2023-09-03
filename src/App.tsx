import "./App.css";
import BannerCarousel from "./components/BannerCarousel";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-screen-xl mx-auto px-4 py-2">
        <BannerCarousel />
      </main>
    </>
  );
}

export default App;
