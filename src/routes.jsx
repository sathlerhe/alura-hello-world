import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultPage from "./components/DefaultPage";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="sobremim" element={<AboutMe />} />
        </Route>

        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
