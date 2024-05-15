import axios, {
  AxiosHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig,
  RawAxiosRequestHeaders,
} from 'axios';
import { TPropsWithAPIParams } from '@/types';
import { recursiveCamelize, recursiveDecamelize } from '@/utils/camelize';

const apiCallerClosure = (baseUrl: string, axiosOptions?: {}) => {
  const instance = axios.create({
    baseURL: baseUrl,
    ...axiosOptions,
  });

  return {
    activeCamelCase: () => {
      // camelCase 에서 snake_case 로 변환
      instance.interceptors.request.use((requestConfig) => {
        if (requestConfig?.headers?.['Content-Type'] === 'multipart/form-data') {
          return requestConfig;
        }
        return {
          ...requestConfig,
          params: recursiveDecamelize(requestConfig.params),
          data: recursiveDecamelize(requestConfig.data),
        };
      });
      // 서버로 부터 받은 응답 값을 snake_case 에서 camelCase 로 변환
      instance.interceptors.response.use((response: AxiosResponse) => {
        let nextResponse: AxiosResponse = { ...response };
        if (
          nextResponse.data &&
          !/multipart\/form-data/.test(nextResponse.headers['content-type'] || '')
        ) {
          nextResponse.data = recursiveCamelize(nextResponse.data);
        }
        return nextResponse;
      });
    },
    initInterceptor: (interceptor: {
      request?: {
        onSuccess?: (request: InternalAxiosRequestConfig) => InternalAxiosRequestConfig;
        onError?: (error: any) => void;
      };
      response?: {
        onSuccess?: (response: AxiosResponse) => AxiosResponse;
        onError?: (error: any) => void;
      };
    }) => {
      instance.interceptors.request.use((requestConfig) => {
        let nextRequestConfig = { ...requestConfig };
        if (interceptor?.request?.onSuccess) {
          nextRequestConfig = interceptor.request.onSuccess(nextRequestConfig);
        }
        return nextRequestConfig;
      }, interceptor.request?.onError);

      instance.interceptors.response.use((response: AxiosResponse) => {
        let nextResponse: AxiosResponse = { ...response };
        if (interceptor?.response?.onSuccess) {
          nextResponse = interceptor.response.onSuccess(nextResponse);
        }
        return nextResponse;
      }, interceptor.response?.onError);
    },
    get: (
      url: string,
      params?: TPropsWithAPIParams,
      headers?: RawAxiosRequestHeaders | AxiosHeaders,
    ) => instance.get(url, { params, headers }),
    post: (
      url: string,
      params?: TPropsWithAPIParams,
      headers?: RawAxiosRequestHeaders | AxiosHeaders,
    ) => instance.post(url, params, { headers }),
    put: (
      url: string,
      params?: TPropsWithAPIParams,
      headers?: RawAxiosRequestHeaders | AxiosHeaders,
    ) => instance.put(url, params, { headers }),
    delete: (url: string, params?: TPropsWithAPIParams) => instance.delete(url, params),
  };
};

const coinApiCaller = apiCallerClosure(process.env.REACT_APP_COINGECKO_HOST_URL!, {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});
coinApiCaller.activeCamelCase();

export { coinApiCaller };

// 다른 api 서버와 연결이 필요한 경우, 아래와 같이 정의
// export const otherApiCaller = apiCallerClosure(process.env.REACT_APP_OTHER_HOST_URL!);
