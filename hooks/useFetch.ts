import { useEffect, useState } from "react";

export const useFetch = <T>(
  cb: () => Promise<T>,
  autoFetch: boolean = true
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const res = await cb();

      setData(res);
    } catch (error) {
      setError(
        error instanceof Error ? error : new Error("An Error occourred")
      );
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setIsLoading(false);
    setData(null);
    setError(null);
  };

  useEffect(() => {
    if (autoFetch) fetchData();
  }, []);

  return {
    isLoading,
    error,
    data,
    refetch: fetchData,
    reset,
  };
};
