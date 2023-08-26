import React, { useCallback, useEffect, useState } from "react";

export default function useFetchData<T>(
  fetchFn: () => Promise<T>,
  initialData: T
) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(initialData);

  const fetchCallback = useCallback(async () => {
    const data = await fetchFn();

    setData(data);
    setIsLoading(false);
  }, [fetchFn]);

  useEffect(() => {
    fetchCallback();
  }, [fetchCallback]);

  return { isLoading, data };
}
