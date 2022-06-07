import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { HomePage, LoginPage, SignUpPage } from "./pages";
import userOperations from "./redux/user/userOperations";

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
              <Route path="login" element={<LoginPage />} />
              <Route path="signup" element={<SignUpPage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
