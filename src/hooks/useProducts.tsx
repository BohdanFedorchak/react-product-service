import { useRequestWithPagination } from "@/hooks/useRequestWithPagination";
import { IUseProductRequest } from "@/interfaces/product";

export default function useProducts({
  limit = 10,
  skip = 0,
}: {
  limit: number;
  skip: number;
}) {
  const {
    data,
    error,
    isLoading: isLoadingNewProducts,
  } = useRequestWithPagination<IUseProductRequest>("products", skip, limit);

  const products = data?.[0]?.products || [];
  const total = data?.[0]?.total || 0;
  const isLoadedAll = skip >= total - limit;

  return {
    products,
    error,
    isLoadedAll,
    isLoadingNewProducts,
  };
}
