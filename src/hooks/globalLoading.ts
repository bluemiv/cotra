import { useEffect, useState } from 'react';
import { useIsFetching, useIsMutating } from '@tanstack/react-query';

/**
 * Fetch loading 중인지 확인하기 위한 hook
 */
export const useGlobalLoading = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const fetchingCount = useIsFetching();
  const mutationCount = useIsMutating();

  useEffect(() => {
    const totalCount = fetchingCount + mutationCount;
    setLoading(totalCount > 0);
  }, [fetchingCount, mutationCount]);

  return loading;
};
