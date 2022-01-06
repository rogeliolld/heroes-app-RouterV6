import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { LoginScreen } from "../login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {
  return (
    <BrowserRouter>
    
    {/* <Route path="/login" element={<LoginScreen />} /> */}
      <Routes>
        
        <Route path="/login" element={
          <PublicRoute>
            <LoginScreen/>
          </PublicRoute>
        }
        />

        <Route path="/*" element= { 
          <PrivateRoute> 
            <DashboardRoutes/>
          </PrivateRoute>
        }/>

      </Routes>
    </BrowserRouter>
  );
};
