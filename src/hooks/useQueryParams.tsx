import { useLocation, useNavigate } from "react-router-dom";

interface UseQueryParams {
  getQueryParam: (key: string) => string | null;
  setQueryParam: (key: string, value: string | undefined) => void;
  getAllQueryParams: () => { [key: string]: string };
}

export default function useQueryParams(): UseQueryParams {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const getQueryParam = (key: string): string | null => queryParams.get(key);

  const setQueryParam = (key: string, value: string | undefined): void => {
    if (value === undefined || value === null || value === "") {
      queryParams.delete(key);
    } else {
      queryParams.set(key, value);
    }
    navigate(`${location.pathname}?${queryParams.toString()}`, {
      replace: true,
    });
  };

  const getAllQueryParams = (): { [key: string]: string } => {
    return Array.from(queryParams.entries()).reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
  };

  return { getQueryParam, setQueryParam, getAllQueryParams };
}
