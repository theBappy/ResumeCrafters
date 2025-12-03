import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import { useSelector } from "react-redux";
import Loader from "../components/loader";
import LoginPage from "./login";

const LayoutPage = () => {
  const { user, loading } = useSelector((state) => state.auth);
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      {user ? (
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Outlet />
        </div>
      ) : (
        <LoginPage />
      )}
    </div>
  );
};

export default LayoutPage;
