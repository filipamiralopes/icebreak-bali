import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import FAQPage from "./pages/FAQ/FAQPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Footer from "./components/Footer/Footer";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import IcebathPage from "./pages/IcebathPage/IcebathPage";
import RedlightPage from "./pages/RedlightPage/RedlightPage";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="page-container">
      <Sidebar />
      <Header />
      <div className="landing-page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/icebath" element={<IcebathPage/>}/>
          <Route path="/redlight" element={<RedlightPage/>}/>
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
