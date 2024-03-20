import { Outlet, Navigate } from "react-router-dom";
import { useUser } from "@/hooks/useUser.tsx";
import MainLayout from "@/layouts/MainLayout.tsx";
import Loader from "@/components/Loader";

const PrivateRoutes = () => {
  const { data: user, error, isValidating } = useUser();

  if (isValidating) {
    return (
      <div className="min-h-screen flex">
        <Loader />
      </div>
    );
  }

  if (error) {
    localStorage.removeItem("token");
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <MainLayout headerClassName={"mb-4"}>
      <Outlet />
    </MainLayout>
  );
};

export default PrivateRoutes;
