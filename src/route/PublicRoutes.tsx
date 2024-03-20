import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "@/hooks/useUser.tsx";
import Loader from "@/components/Loader";

const PublicRoutes = () => {
  const { data: user, isValidating } = useUser();

  if (isValidating) {
    return (
      <div className="min-h-screen flex">
        <Loader />;
      </div>
    );
  }

  if (user) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PublicRoutes;
