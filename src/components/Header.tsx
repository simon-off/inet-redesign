import { Phone, Mail, MessageSquare, Sun, Moon, Check, ShoppingCart, Search, Cpu, Bot } from "lucide-react";
import { useEffect, useRef } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const SELLING_POINTS = ["Fri frakt", "30 dagars öppet köp", "Fria returer", "Order skickas på måndag"] as const;
const NAV_LINKS = [
  { name: "Produkter", href: "#" },
  { name: "Datorbyggare", href: "#" },
  { name: "Veckans Tips", href: "#" },
  { name: "Kampanjer", href: "#" },
  { name: "Fyndhörnan", href: "#" },
  { name: "Tävling", href: "#" },
  { name: "Guider", href: "#" },
] as const;

export default function Header() {
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
        <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-4 px-4 pb-2 pt-4">
          <ul className="flex max-h-[1.5em] flex-wrap gap-4 overflow-hidden max-sm:text-xs">
            {SELLING_POINTS.map((sellingPoint) => (
              <li className="flex items-end gap-1 whitespace-nowrap">
                <Check size={16} aria-hidden className="-translate-y-[1px]" /> {sellingPoint}
              </li>
            ))}
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
            <div className="hidden items-center gap-3 pl-4 sm:flex">
              <p>Privatperson</p>
              <span className="-mt-[2px]">|</span>
              <a href="#" className="link text-gray-500">
                Företag
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-screen-xl grid-cols-2 items-center gap-x-4 gap-y-4 px-4 pb-6 pt-4 text-sm max-md:grid-rows-[auto_auto] sm:gap-x-8 md:grid-cols-[auto_1fr_auto]">
        <a href="#">
          <h1 className="flex items-center gap-2 font-mono text-4xl font-black lg:text-[2.75rem]">
            <Cpu size={"1em"} className="" />
            <span className="translate-y-[1px] leading-none tracking-tight">inot</span>
          </h1>
        </a>
        <div
          onClick={() => searchInputRef.current?.focus()}
          className="flex flex-grow items-center gap-3 rounded-md border border-gray-200 bg-white px-3 py-2 shadow-md outline-1 outline-gray-400 focus-within:outline dark:border-gray-700 dark:bg-gray-950 max-md:col-span-full max-md:row-start-2"
        >
          <Search size={16} />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Sök bland 13 157 produkter i 578 kategorier..."
            className="w-full bg-inherit focus:outline-none focus:placeholder:text-gray-500"
          />
        </div>
        <div className="flex items-center justify-end gap-4 sm:gap-8">
          <a href="#" className="link flex items-center">
            <span className="mr-2">
              <Bot size={20} />
            </span>{" "}
            Min sida
          </a>
          <a
            href="#"
            className="flex h-full items-center gap-2 rounded-md bg-green-700 bg-opacity-90 px-4 py-2 text-white shadow-md transition hover:bg-green-600 dark:bg-green-800 dark:hover:bg-green-700"
          >
            <ShoppingCart size={16} className="my-1" /> <span className="max-sm:sr-only">Kundvagn</span>
          </a>
        </div>
      </div>

      <div className="border-y border-gray-200 bg-white text-sm shadow-lg dark:border-gray-700 dark:bg-gray-800">
        <nav className="mx-auto flex max-w-screen-xl justify-between px-4">
          <ul className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <li>
                <a className="link block py-4" href={link.href}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex">
            <li className="px-4">
              <a className="link flex items-center gap-2 py-4" href="#">
                <Phone size={16} /> 404-12-55-00
              </a>
            </li>
            <li className="border-l px-4 dark:border-gray-700">
              <a className="link flex items-center gap-2 py-4" href="#">
                <MessageSquare size={16} className="translate-y-[1px]" /> Chatt
              </a>
            </li>
            <li className="border-l pl-4 dark:border-gray-700">
              <a className="link flex items-center gap-2 py-4" href="#">
                <Mail size={16} /> info@inot.se
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
