import { useQuery } from '@tanstack/react-query';
import { pingApi } from '@/api';
import { coinApiCaller } from '@/utils';

const PREIFX = 'PING';

export const SERVER_HELTH_CHECK_QUERY_KEY = [PREIFX];

export const useServerHelthCheckQuery = (options?: {}) =>
  useQuery({
    queryKey: [...SERVER_HELTH_CHECK_QUERY_KEY],
    queryFn: async () => {
      const { url } = pingApi.ping();
      const { data } = await coinApiCaller.get(url);
      return data;
    },
    ...options,
  });
