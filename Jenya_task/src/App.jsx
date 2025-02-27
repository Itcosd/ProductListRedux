import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import LoginScreen from "./Screens/LoginScreen";
import ProductListScreen from "./Screens/ProductListScreen";
import ProductFormScreen from "./Screens/ProductFormScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/add" element={<ProductFormScreen />} />
        <Route path="/edit/:id" element={<ProductFormScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
