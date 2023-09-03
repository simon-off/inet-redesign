function header() {
  return (
    <header>
      <div className="bg-stone-800 text-gray-100 text-xs">
        <div className="mx-auto max-w-screen-xl px-4 flex justify-between items-center">
          <ul className="flex gap-4">
            <li>✔ Fri frakt</li>
            <li>✔ 30 dagars öppet köp</li>
            <li>✔ Fria returer</li>
            <li>✔ Order skickas på måndag</li>
          </ul>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 ">
              ☀
              <div className="cursor-pointer relative bg-stone-500 rounded-full w-8 h-4 after:bg-stone-200 after:h-3 after:aspect-square after:left-[2px] after:top-[2px] after:rounded-full after:block after:absolute"></div>
              🌛
            </div>
            <div className="flex gap-3 border-l py-2 pl-4 border-stone-700 items-center">
              <a href="#">Privatperson</a> <span className="-mt-[2px]">|</span>{" "}
              <a href="#" className="text-stone-500">
                Företag
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-stone-300 text-sm">
        <div className="mx-auto max-w-screen-xl px-4 py-2 flex gap-8 items-center">
          <a href="#">
            <h1 className="text-4xl font-semibold">💿inet</h1>
          </a>
          <div className="px-3 py-2 flex gap-3 border border-stone-300 bg-white focus-within:outline outline-1 flex-grow">
            <span>🔍</span>
            <input
              type="text"
              placeholder="Sök bland 13 157 produkter i 578 kategorier..."
              className="focus:outline-none focus:placeholder:text-stone-500 w-full"
            />
          </div>
          <a href="#" className="flex items-center">
            <span className="text-xl bg-stone-300 rounded-full overflow-hidden inline-flex mr-2">
              👷‍♂️
            </span>{" "}
            Min sida
          </a>
          <a href="#" className="bg-green-600 px-4 py-2 rounded-sm text-white">
            🛒 Kundvagn
          </a>
        </div>
      </div>
      <div className="border-b border-stone-300 bg-white text-sm">
        <div className="mx-auto max-w-screen-xl px-4 flex justify-between">
          <ul className="flex gap-6">
            <li>
              <a className="py-4 block" href="#">
                Produkter
              </a>
            </li>
            <li>
              <a className="py-4 block" href="#">
                Datorbyggare
              </a>
            </li>
            <li>
              <a className="py-4 block" href="#">
                Veckans Tips
              </a>
            </li>
            <li>
              <a className="py-4 block" href="#">
                Kampanjer
              </a>
            </li>
            <li>
              <a className="py-4 block" href="#">
                Fyndhörnan
              </a>
            </li>
            <li>
              <a className="py-4 block" href="#">
                Tävling
              </a>
            </li>
            <li>
              <a className="py-4 block" href="#">
                Guider
              </a>
            </li>
          </ul>
          <ul className="flex">
            <li className="px-4">
              <a className="py-4 block" href="#">
                📞 031-65-27-00
              </a>
            </li>
            <li className="border-l px-4">
              <a className="py-4 block" href="#">
                💭 Chatt
              </a>
            </li>
            <li className="border-l pl-4">
              <a className="py-4 block" href="#">
                📧 info@inet.se
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default header;
