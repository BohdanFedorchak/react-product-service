import { ILoginResponse } from "@/interfaces/auth.ts";
import { axiosInstance as axios } from "@/configs/axios.tsx";

const apiPath = "/auth";

export function useAuth() {
  const login = async (
    username: string,
    password: string,
  ): Promise<ILoginResponse> => {
    const loginPath = "/login";

    // eslint-disable-next-line no-useless-catch
    try {
      const { data } = await axios.post<ILoginResponse>(
        apiPath + loginPath,
        { username, password },
        { headers: { "Content-Type": "application/json" } },
      );

      const { token } = data;

      return { token };
    } catch (e) {
      throw e;
    }
  };
  return { login };
}
