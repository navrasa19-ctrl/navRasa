import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext"; 
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
// import SmoothScroll from "./pages/SmoothScroll";
function App() {
  return (
    <AuthProvider>
      {/* <Navbar /> */}
      <Home />
      <Router>
        <Routes>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
