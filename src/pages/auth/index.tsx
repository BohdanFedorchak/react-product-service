import { ChangeEvent, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { useAuth } from "@/hooks/useAuth.tsx";
import { setAuthorizationTokenToTheRequestHeaders } from "@/configs/axios.tsx";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function Auth() {
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [, setTokenValue] = useLocalStorage("token", "");

  const handleInputChanges = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handelLogin = async (
    event: React.FormEvent<HTMLInputElement>
  ): Promise<void> => {
    event.preventDefault();
    const { username, password } = formData;
    const { token } = await login(username, password);
    setTokenValue(token);
    setAuthorizationTokenToTheRequestHeaders(token);
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <Input
            label="Username"
            id="username"
            inputChangedEvent={handleInputChanges}
          ></Input>
          <Input
            label="Password"
            id="password"
            type="password"
            inputChangedEvent={handleInputChanges}
          ></Input>
          <div>
            <Button
              variant="outline"
              color="primary"
              type="button"
              onClick={handelLogin}
            >
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
