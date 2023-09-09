import { useEffect, useState } from "react";
import IProduct from "../types/IProduct";

export default function useFetch(url: RequestInfo | URL) {
  const [data, setData] = useState<IProduct[]>();
  const [error, setError] = useState<Error | unknown>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [url]);

  return { data, error, loading };
}
