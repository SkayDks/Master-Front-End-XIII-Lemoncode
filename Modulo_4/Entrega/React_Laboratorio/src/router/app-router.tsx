import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage,ListPage, RickAMorty } from "@/ui/view";
import { switchRoutes } from "./routes";


export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<LoginPage />} />
        <Route path={switchRoutes.list} element={<ListPage />} />
        <Route path={switchRoutes.rickamorty} element={<RickAMorty />} />
      </Routes>
    </Router>
  );
};
