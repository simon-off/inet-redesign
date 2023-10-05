import { Phone, Mail, MessageSquare, Sun, Moon, Check, ShoppingCart, Search, Cpu, Bot, Menu } from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { CompanyContext } from "../App";
import useWindowResize from "../hooks/useWindowResize";

const SELLING_POINTS = ["Fri frakt", "30 dagars öppet köp", "Fria returer", "Order skickas på måndag"] as const;
const NAV_LINKS = [
  { innerText: "Produkter", href: "#" },
  { innerText: "Datorbyggare", href: "#" },
  { innerText: "Veckans Tips", href: "#" },
  { innerText: "Kampanjer", href: "#" },
  { innerText: "Fyndhörnan", href: "#" },
  { innerText: "Tävling", href: "#" },
  { innerText: "Guider", href: "#" },
] as const;
const CONTACT_LINKS = [
  { innerText: "404-12-55-00", href: "tel:404-12-55-00", icon: <Phone size={16} /> },
  { innerText: "Chatt", href: "#", icon: <MessageSquare size={16} /> },
  { innerText: "info@inot.se", href: "mailto:info@inot.se", icon: <Mail size={16} /> },
] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const { companyMode, setCompanyMode } = useContext(CompanyContext);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useWindowResize(() => setWindowHeight(window.innerHeight));

  const CompanySwitcher = ({ className }: { className: string }) => {
    return (
      <div className={`flex items-center gap-3 pl-4 max-md:pr-4 ${className}`}>
        <button onClick={() => setCompanyMode(false)} className={companyMode ? "link text-gray-500" : ""}>
          Privatperson
        </button>
        <span className="-mt-[2px]">|</span>
        <button onClick={() => setCompanyMode(true)} className={companyMode ? "" : "link text-gray-500"}>
          Företag
        </button>
      </div>
    );
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <header
        className="relative z-10 bg-gray-100 from-gray-950 to-transparent dark:bg-gray-900 dark:bg-gradient-to-b"
        ref={headerRef}
      >
        <div className="text-sm">
          <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-4 px-4 pb-2 pt-4">
            <ul className="flex max-h-[1.5em] flex-wrap gap-4 overflow-hidden max-sm:text-xs">
              {SELLING_POINTS.map((sellingPoint, i) => (
                <li key={i} className="flex items-end gap-1 whitespace-nowrap">
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
              <CompanySwitcher className="max-md:hidden" />
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-screen-xl grid-cols-2 items-center gap-x-4 gap-y-4 px-4 py-4 text-sm max-md:grid-rows-[auto_auto] sm:gap-x-8 md:grid-cols-[auto_1fr_auto] md:pb-6">
          <a href="#">
            <h1 className="flex items-center gap-2 font-mono text-4xl font-black lg:text-[2.75rem]">
              <Cpu size={"1em"} className="" />
              <span className="translate-y-[1px] leading-none tracking-tight">inot</span>
            </h1>
          </a>
          <div className="flex gap-4 max-md:col-span-full max-md:row-start-2">
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              <Menu />
              <span className="sr-only">Meny</span>
            </button>
            <div
              onClick={() => searchInputRef.current?.focus()}
              className="flex flex-grow items-center gap-3 rounded-md border bg-white px-3 py-2 shadow-md outline-1 outline-gray-400 focus-within:outline dark:border-gray-700 dark:bg-gray-950"
            >
              <Search size={16} />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Sök bland 13 157 produkter i 578 kategorier..."
                className="w-full bg-inherit focus:outline-none focus:placeholder:text-gray-500"
              />
            </div>
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

        <div
          className="transition-left top-full z-10 border-y bg-white text-sm shadow-lg dark:border-gray-700 dark:bg-gray-800 max-md:absolute max-md:w-[400px] max-md:max-w-[80%] max-md:border-r"
          style={{
            borderColor: `${companyMode ? "#d97706" : ""}`,
            left: `${menuOpen ? "0" : "-100%"}`,
          }}
        >
          <nav
            className="mx-auto flex max-w-screen-xl justify-between overflow-scroll max-md:flex-col md:items-center"
            style={{
              maxHeight: `calc(${windowHeight}px - ${headerRef.current?.offsetHeight}px)`,
            }}
          >
            <ul className="max-md:px-4 md:flex md:pl-2 xl:pl-1">
              {NAV_LINKS.map((link, i) => (
                <li key={i}>
                  <a className="link block whitespace-nowrap py-4 leading-none md:px-2 xl:px-3" href={link.href}>
                    {link.innerText}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="dark:border-gray-700 max-md:border-t md:flex md:pr-2 lg:pr-0">
              {CONTACT_LINKS.map((link, i) => (
                <li key={i} className="first-of-type:border-none dark:border-gray-700 md:border-l">
                  <a className="link flex items-center gap-2 px-4 py-4 leading-none" href={link.href}>
                    {link.icon} <span className="md:sr-only lg:not-sr-only">{link.innerText}</span>
                  </a>
                </li>
              ))}
            </ul>
            <CompanySwitcher className="border-t py-4 dark:border-gray-700 md:hidden" />
          </nav>
        </div>
      </header>
      <div
        onClick={() => setMenuOpen(false)}
        className="fixed z-[1] h-full w-full bg-gray-950 bg-opacity-50 transition-all md:hidden"
        style={!menuOpen ? { pointerEvents: "none", opacity: 0 } : {}}
      ></div>
    </>
  );
}
