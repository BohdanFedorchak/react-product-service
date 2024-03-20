import fetcher from "@/services /fetcher";
import useSWRInfinite, { SWRInfiniteResponse } from "swr/infinite";

const getKey = ({
  limit = 10,
  key = "",
  skip = 0,
}: {
  limit?: string | number;
  skip?: string | number;
  key?: string;
}) => {
  return `/${key}?skip=${skip}&limit=${limit}`;
};

export function useRequestWithPagination<T = any>(
  key = "",
  skip = 0,
  limit = 10
): SWRInfiniteResponse<T, Error> {
  return useSWRInfinite(() => getKey({ limit, skip, key }), fetcher, {
    revalidateOnFocus: false,
  });
}
