import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { switchRoutes } from "./routes";
import { TableGames, VideoGames, Menu } from "ui/view";


export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<Menu />} />
        <Route path={switchRoutes.tablegames} element={<TableGames />} />
        <Route path={switchRoutes.videogames} element={<VideoGames />} />
      </Routes>
    </Router>
  );
};
