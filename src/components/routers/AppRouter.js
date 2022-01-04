import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { DcScreen } from "../dc/DcScreen";
import { LoginScreen } from "../login/LoginScreen";
import { MarvelScreen } from "../marvel/MarvelScreen";
import { SearchScreen } from "../search/SearchScreen";
import { Navbar } from "../ui/Navbar";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        
      </Routes>
    </BrowserRouter>
  );
};
