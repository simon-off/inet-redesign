import { useEffect, useRef } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function Header() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header>
      <div className="text-sm">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4">
          <ul className="flex gap-4">
            <li>✔ Fri frakt</li>
            <li>✔ 30 dagars öppet köp</li>
            <li>✔ Fria returer</li>
            <li>✔ Order skickas på måndag</li>
          </ul>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className={darkMode ? "grayscale filter" : ""}>☀</span>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`relative h-4 w-8 cursor-pointer rounded-full bg-gray-500 after:absolute after:top-[2px] after:block after:aspect-square after:h-3 after:rounded-full after:bg-gray-50 after:transition-[left] ${
                  darkMode ? "after:left-[calc(2rem-2px-0.75rem)]" : "after:left-[2px]"
                }`}
              ></button>
              <span className={!darkMode ? "grayscale filter" : ""}>🌛</span>
            </div>
            <div className="flex items-center gap-3 py-4 pl-4">
              <p>Privatperson</p>
              <span className="-mt-[2px]">|</span>
              <p className="text-gray-500">Företag</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm">
        <div className="mx-auto flex max-w-screen-xl items-center gap-8 px-4 pb-6 pt-4">
          <a href="#">
            <h1 className="font-mono text-4xl font-black">
              <span className="inline-block -translate-y-[2px] pr-1">💿</span>
              <span className="text-[2.75rem]">inot</span>
            </h1>
          </a>
          <div
            onClick={() => searchInputRef.current?.focus()}
            className="flex flex-grow gap-3 rounded-md border border-gray-200 bg-white px-3 py-2 shadow-md outline-1 outline-gray-400 focus-within:outline dark:border-gray-700 dark:bg-gray-950"
          >
            <span>🔍</span>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Sök bland 13 157 produkter i 578 kategorier..."
              className="w-full bg-inherit focus:outline-none focus:placeholder:text-gray-500"
            />
          </div>
          <a href="#" className="flex items-center">
            <span className="mr-2 inline-flex overflow-hidden rounded-full bg-gray-300 text-xl">👷‍♂️</span> Min sida
          </a>
          <a href="#" className="rounded-md bg-green-600 px-4 py-2 text-white shadow-md">
            🛒 Kundvagn
          </a>
        </div>
      </div>
      <div className="border-y border-gray-200 bg-white text-sm shadow-lg dark:border-gray-700 dark:bg-gray-800">
        <nav className="mx-auto flex max-w-screen-xl justify-between px-4">
          <ul className="flex gap-6">
            <li>
              <a className="block py-4" href="#">
                Produkter
              </a>
            </li>
            <li>
              <a className="block py-4" href="#">
                Datorbyggare
              </a>
            </li>
            <li>
              <a className="block py-4" href="#">
                Veckans Tips
              </a>
            </li>
            <li>
              <a className="block py-4" href="#">
                Kampanjer
              </a>
            </li>
            <li>
              <a className="block py-4" href="#">
                Fyndhörnan
              </a>
            </li>
            <li>
              <a className="block py-4" href="#">
                Tävling
              </a>
            </li>
            <li>
              <a className="block py-4" href="#">
                Guider
              </a>
            </li>
          </ul>
          <ul className="flex">
            <li className="px-4">
              <a className="block py-4" href="#">
                📞 404-12-55-00
              </a>
            </li>
            <li className="border-l px-4 dark:border-gray-700">
              <a className="block py-4" href="#">
                💭 Chatt
              </a>
            </li>
            <li className="border-l pl-4 dark:border-gray-700">
              <a className="block py-4" href="#">
                📧 info@inot.se
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
