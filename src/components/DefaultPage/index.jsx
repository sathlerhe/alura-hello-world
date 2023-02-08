import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../Banner";

function DefaultPage({ children }) {
  return (
    <main>
      <Banner />

      <Outlet />
    </main>
  );
}

export default DefaultPage;
