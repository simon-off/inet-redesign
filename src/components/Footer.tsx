export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12 dark:border-gray-700 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl px-4 text-center font-mono">
        <p>
          redesign of{" "}
          <a href="https://inet.se" className="link">
            www.inet.se
          </a>{" "}
          by{" "}
          <a href="https://simonoff.se" className="link">
            simonoff
          </a>
        </p>
        <p className="mt-1 text-xs opacity-75">using React, TypeScript & Tailwind CSS</p>
      </div>
    </footer>
  );
}
