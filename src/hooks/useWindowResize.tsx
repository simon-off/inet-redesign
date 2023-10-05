import { useEffect } from "react";

export default function useWindowResize(action: () => void) {
  useEffect(() => {
    const updateDimension = () => {
      action();
    };
    updateDimension();
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [action]);
}
