import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import LoginPage from "../pages/LoginPage";
import PrivateLayout from "../layouts/PrivateLayout";

const RequireAuth = ({ children, token }) => {
  const location = useLocation();
  return token ? children : <Navigate to="/signin" state={{ from: location }} />;
};

const Redirect = ({ token }) => {
  return token ? <Navigate to="/admin/content" /> : <Navigate to="/signin" />;
};

const AppRoutes = () => {
  const { token } = useSelector(({ auth }) => auth);

  return (
    <Routes>
      <Route path="admin" element={<Redirect token={token} />} />
      <Route path="admin/*" element={<RequireAuth token={token} children={<PrivateLayout />} />} />
      <Route path="signin" element={<LoginPage />} />
      <Route path="*" element={<Redirect token={token} />} />
    </Routes>
  );
};

export default AppRoutes;
