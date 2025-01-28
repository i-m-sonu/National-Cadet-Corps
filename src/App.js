import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/Navbar";
import Footer from "./components/Footer";
import MyTimeline from "./components/MyTimeline";
import Homepage from "./components/Homepage";
import "./global.css";

const App = () => {
  return (
    <>
    {/* <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route exactpath="/" element={<Homepage />} />
        <Route  path="/timeline" element={<MyTimeline />} />


      </Routes>
      
      <Footer />
    </Router> */}
    <MyTimeline />
 //   <Footer />
    </>
  );
};

export default App;
