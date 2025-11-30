import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import DashboardPage from "./pages/dashboard";
import ResumeCraftersPage from "./pages/resume_crafters";
import PreviewPage from "./pages/preview";
import LoginPage from "./pages/login";
import LayoutPage from "./pages/layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="app" element={<LayoutPage />}>
          <Route index element={<DashboardPage />} />
          <Route path="builder/:resumeId" element={<ResumeCraftersPage />} />
        </Route>

        <Route path="view/:resumeId" element={<PreviewPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default App;
