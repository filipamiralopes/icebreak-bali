import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import HomePage from "./pages/HomePage/HomePage";
import IceBathPage from "./pages/IceBathPage/IceBathPage";
import RedLightPage from "./pages/RedLightPage/RedLightPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Footer from "./components/Footer/Footer";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="page-container">
      <Sidebar />
      <div className="landing-page">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/icebath" element={<IceBathPage />} />

          <Route path="/redlight" element={<RedLightPage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
