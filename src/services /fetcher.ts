import { axiosInstance } from "@/configs/axios.tsx";
import { AxiosRequestHeaders } from "axios";

interface CustomAxiosRequestHeaders extends AxiosRequestHeaders {
  "Content-Type"?: string;
}

type IRequestMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

const fetcher = <RequestData>(
  url: string,
  method: IRequestMethod = "GET",
  data?: RequestData,
  headers?: CustomAxiosRequestHeaders,
) =>
  axiosInstance({
    url,
    method,
    data,
    headers,
  }).then((res) => res.data);

export default fetcher;
