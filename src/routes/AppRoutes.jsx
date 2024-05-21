import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/index";
import About from "../pages/about/index";

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