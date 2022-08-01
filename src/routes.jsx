import React from "react";import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./pages/Create/Create";
import Update from "./pages/Update/index";
import Delete from "./pages/Delete/index";
import {Home} from './pages/Home/index'
export default function RouteList() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update" element={<Update/>} />
        <Route path="/delete" element={<Delete/>} />
      </Routes>
    </Router>
  );
}
//        
