import { useEffect } from "react";

export default function useWindowResize(action: () => void) {
  useEffect(() => {
    action();

    window.addEventListener("resize", action);

    return () => {
      window.removeEventListener("resize", action);
    };
  }, [action]);
}
