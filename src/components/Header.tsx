import { Phone, Mail, MessageSquare, Sun, Moon, Check, ShoppingCart, Search, Cpu, Bot } from "lucide-react";
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
            <li className="flex items-end gap-1">
              <Check size={16} aria-hidden className="-translate-y-[1px]" /> Fri frakt
            </li>
            <li className="flex items-end gap-1">
              <Check size={16} aria-hidden className="-translate-y-[1px]" /> 30 dagars öppet köp
            </li>
            <li className="flex items-end gap-1">
              <Check size={16} aria-hidden className="-translate-y-[1px]" /> Fria returer
            </li>
            <li className="flex items-end gap-1">
              <Check size={16} aria-hidden className="-translate-y-[1px]" /> Order skickas på måndag
            </li>
          </ul>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className={darkMode ? "opacity-50" : ""}>
                <Sun size={16} />
              </span>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`relative h-4 w-8 cursor-pointer rounded-full bg-gray-500 after:absolute after:top-[2px] after:block after:aspect-square after:h-3 after:rounded-full after:bg-gray-50 after:transition-[left] dark:bg-gray-700 ${
                  darkMode ? "after:left-[calc(2rem-2px-0.75rem)]" : "after:left-[2px]"
                }`}
              ></button>
              <span className={!darkMode ? "opacity-50" : ""}>
                <Moon size={16} />
              </span>
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
            <h1 className="flex items-center gap-2 font-mono text-4xl font-black">
              <Cpu size={42} className="translate-y-[0px]" />
              <span className="translate-y-[1px] text-[2.75rem] leading-none">inot</span>
            </h1>
          </a>
          <div
            onClick={() => searchInputRef.current?.focus()}
            className="flex flex-grow items-center gap-3 rounded-md border border-gray-200 bg-white px-3 py-2 shadow-md outline-1 outline-gray-400 focus-within:outline dark:border-gray-700 dark:bg-gray-950"
          >
            <Search size={16} />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Sök bland 13 157 produkter i 578 kategorier..."
              className="w-full bg-inherit focus:outline-none focus:placeholder:text-gray-500"
            />
          </div>
          <a href="#" className="flex items-center">
            <span className="mr-2 inline-flex overflow-hidden rounded-full bg-gray-500 p-2 text-xl text-white dark:bg-gray-700">
              <Bot size={20} />
            </span>{" "}
            Min sida
          </a>
          <a
            href="#"
            className="flex -translate-y-[1px] items-center gap-2 rounded-md bg-gray-500 px-4 py-2 text-white shadow-md  dark:bg-gray-700"
          >
            <ShoppingCart size={16} /> Kundvagn
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
              <a className="flex items-center gap-2 py-4" href="#">
                <Phone size={16} /> 404-12-55-00
              </a>
            </li>
            <li className="border-l px-4 dark:border-gray-700">
              <a className="flex items-center gap-2 py-4" href="#">
                <MessageSquare size={16} className="translate-y-[1px]" /> Chatt
              </a>
            </li>
            <li className="border-l pl-4 dark:border-gray-700">
              <a className="flex items-center gap-2 py-4" href="#">
                <Mail size={16} /> info@inot.se
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
