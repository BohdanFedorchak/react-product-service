import useSWR from "swr";
import { IUser } from "@/interfaces/auth.ts";
import fetcher from "@/services /fetcher.ts";
import { setAuthorizationTokenToTheRequestHeaders } from "@/configs/axios.tsx";
import { useLocalStorage } from "usehooks-ts";

export function useUser() {
  const [token] = useLocalStorage("token", "");

  if (token) {
    setAuthorizationTokenToTheRequestHeaders(token);
  }

  return useSWR<IUser>(token ? "/auth/me" : null, fetcher);
}
