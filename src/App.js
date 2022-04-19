import React, { useEffect } from "react";
import Login from "./pages/auth";
import Dashboard from "./pages/dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {useSelector, } from 'react-redux' ;
const App = () => {
  const state = useSelector((state)=>state);
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn)

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Dashboard /> : <Login />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
