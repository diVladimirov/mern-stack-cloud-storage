import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, redirectPath = "/" }) => {
  const isAuth = useSelector((state) => state.user.isAuth);
  if (!isAuth) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default PrivateRoute;
