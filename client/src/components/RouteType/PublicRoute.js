import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children, redirectPath = "/", restricted = false }) => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const shouldRedirect = isAuth && restricted;
  if (shouldRedirect) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default PublicRoute;
