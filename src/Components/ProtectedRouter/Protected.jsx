import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const Authenticate = useSelector((state) => state?.resort?.isAuthentication);
  console.log("Authenticate::::::::::::::", Authenticate);

  const isAuthentication = Authenticate;

  if (isAuthentication) {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
};

export default ProtectedRoute;
