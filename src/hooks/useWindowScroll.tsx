import { useEffect } from "react";

export default function useWindowScroll(action: () => void) {
  useEffect(() => {
    action();

    window.addEventListener("scroll", action);

    return () => {
      window.removeEventListener("scroll", action);
    };
  }, [action]);
}
