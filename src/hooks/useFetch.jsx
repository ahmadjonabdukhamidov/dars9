import { useState, useEffect } from "react";

export function useFetch() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setIsPending(true);
      try {
        const req = await fetch(url);

        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setData(data);
        setIsPending(fasle);
        setError(null);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
        isPending(false);
      }
    };
  }, []);

  return { data, isPending, error };
}


