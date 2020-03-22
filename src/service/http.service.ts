import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axios = Axios.create({
  paramsSerializer: (params) => {
    const result: string[] = [];
    Object.keys(params).forEach((key) => {
      result.push(`${key}=${encodeURIComponent(params[key])}`);
    });
    return result.join('&');
  },
});

export class HttpService {
  request<T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return axios.request<T>(config);
  }

  get<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return axios.get<T>(url, config);
  }

  delete<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return axios.delete(url, config);
  }

  post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return axios.post(url, data, config);
  }

  put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return axios.put(url, data, config);
  }

  patch<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return axios.patch(url, data, config);
  }
}
