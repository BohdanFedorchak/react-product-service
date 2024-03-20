import { SWRConfig } from "swr";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AuthPage from "@/pageProviders/AuthPage.tsx";
import HomePage from "@/pageProviders/HomePage.tsx";
import CategoriesPage from "@/pageProviders/CategoriesPage";
import ProductsPage from "@/pageProviders/ProductsPage";

import PrivateRoutes from "@/route/PrivateRoutes.tsx";
import PublicRoutes from "@/route/PublicRoutes.tsx";

function App() {
  return (
    <>
      <SWRConfig value={{ revalidateOnFocus: false }}>
        <Router>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route element={<HomePage />} path="/" />
              <Route element={<CategoriesPage />} path="/categories" />
              <Route element={<ProductsPage />} path="/products" />
            </Route>
            <Route element={<PublicRoutes />}>
              <Route element={<AuthPage />} path="/login" />
            </Route>
          </Routes>
        </Router>
      </SWRConfig>
    </>
  );
}

export default App;
