import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import DashboardPage from "./pages/dashboard";
import ResumeCraftersPage from "./pages/resume_crafters";
import PreviewPage from "./pages/preview";
import LayoutPage from "./pages/layout";
import { useDispatch } from "react-redux";
import apiAxiosInstance from "./configs/axios-api";
import { login, setLoading } from "./app/features/auth-slice";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const getUserData = async () => {
    const token = localStorage.getItem("token");
    try {
      if (token) {
        const { data } = await apiAxiosInstance.get("/api/users/data", {
          headers: { Authorization: token },
        });
        if (data.user) {
          dispatch(login({ token, user: data.user }));
        }
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    } catch (error) {
      dispatch(setLoading(false));
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="app" element={<LayoutPage />}>
          <Route index element={<DashboardPage />} />
          <Route path="builder/:resumeId" element={<ResumeCraftersPage />} />
        </Route>

        <Route path="view/:resumeId" element={<PreviewPage />} />
      </Routes>
    </>
  );
};

export default App;
