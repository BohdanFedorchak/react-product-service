import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "@/hooks/useUser.tsx";

const PublicRoutes = () => {
  const { data: user, isValidating } = useUser();

  if (isValidating) {
    return <div>Loading...</div>;
  }

  if (user) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PublicRoutes;
