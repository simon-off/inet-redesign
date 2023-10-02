import BannerCarousel from "./components/BannerCarousel";
import Header from "./components/Header";
import ItemShelf from "./components/ItemShelf";

function App() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-gray-100 from-gray-950 to-transparent bg-[auto_100px] bg-no-repeat text-gray-800 dark:bg-gray-900 dark:bg-gradient-to-b dark:text-gray-200">
      <Header />
      <main className="mx-auto flex w-full max-w-screen-xl flex-1 flex-col gap-8 px-4 pb-16 pt-8">
        <BannerCarousel />
        <ItemShelf heading="Kampanjer" link="#" visibleItems={5} fetchURL="mock-products.json" />
        <ItemShelf heading="Stoff osv" link="#" visibleItems={4} fetchURL="mock-products.json" />
        <ItemShelf heading="Bra skit" link="#" visibleItems={6} fetchURL="mock-products.json" />
      </main>
      <footer className="border-t border-gray-200 bg-white py-8 dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 text-center font-mono text-sm">
          copy and redesign of{" "}
          <a href="https://inet.se" className="hover:text-blue-400">
            www.inet.se
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
