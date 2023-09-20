function header() {
  return (
    <header>
      <div className="text-sm text-gray-800">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4">
          <ul className="flex gap-4">
            <li>✔ Fri frakt</li>
            <li>✔ 30 dagars öppet köp</li>
            <li>✔ Fria returer</li>
            <li>✔ Order skickas på måndag</li>
          </ul>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 ">
              ☀
              <div className="relative h-4 w-8 cursor-pointer rounded-full bg-stone-500 after:absolute after:left-[2px] after:top-[2px] after:block after:aspect-square after:h-3 after:rounded-full after:bg-stone-200"></div>
              🌛
            </div>
            <div className="flex items-center gap-3 py-4 pl-4">
              <a href="#">Privatperson</a> <span className="-mt-[2px]">|</span>{" "}
              <a href="#" className="text-stone-500">
                Företag
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-stone-200 text-sm">
        <div className="mx-auto flex max-w-screen-xl items-center gap-8 px-4 pb-6 pt-4">
          <a href="#">
            <h1 className="text-4xl font-semibold">💿inet</h1>
          </a>
          <div className="flex flex-grow gap-3 rounded-md border border-stone-200 bg-white px-3 py-2 shadow-md outline-1 focus-within:outline">
            <span>🔍</span>
            <input
              type="text"
              placeholder="Sök bland 13 157 produkter i 578 kategorier..."
              className="w-full focus:outline-none focus:placeholder:text-stone-500"
            />
          </div>
          <a href="#" className="flex items-center">
            <span className="mr-2 inline-flex overflow-hidden rounded-full bg-stone-300 text-xl">👷‍♂️</span> Min sida
          </a>
          <a href="#" className="rounded-md bg-green-600 px-4 py-2 text-white shadow-md">
            🛒 Kundvagn
          </a>
        </div>
      </div>
      <div className="bg-white text-sm shadow-lg">
        <div className="mx-auto flex max-w-screen-xl justify-between px-4">
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
                📞 031-65-27-00
              </a>
            </li>
            <li className="border-l px-4">
              <a className="block py-4" href="#">
                💭 Chatt
              </a>
            </li>
            <li className="border-l pl-4">
              <a className="block py-4" href="#">
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
