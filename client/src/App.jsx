import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { DiskPage, HomePage, LoginPage, SignUpPage } from "./pages";
import userOperations from "./redux/user/userOperations";
import PrivateRoute from "./components/RouteType/PrivateRoute";
import PublicRoute from "./components/RouteType/PublicRoute";

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    (state) => state.user.isFetchingCurrentUser
  );

  useEffect(() => {
    dispatch(userOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isFetchingCurrentUser && (
        <div>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route
                path="login"
                element={
                  <PublicRoute redirectPath="/disk" restricted>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="signup"
                element={
                  <PublicRoute restricted>
                    <SignUpPage />
                  </PublicRoute>
                }
              />
              <Route
                path="disk"
                element={
                  <PrivateRoute redirectPath="/login">
                    <DiskPage />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
