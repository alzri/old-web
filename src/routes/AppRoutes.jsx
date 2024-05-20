import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Index";
import About from "../pages/about/About";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;