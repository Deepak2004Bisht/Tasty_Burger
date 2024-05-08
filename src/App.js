import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Section2 from "./pages/Home/Section2";
import Header from "./components/Layouts/Header";
import Section3 from "./pages/Home/Section3";
import Section5 from "./pages/Home/Section5";
import Section6 from "./pages/Home/Section6";
import Section7 from "./pages/Home/Section7";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<Section2/>} />
        <Route path="menu" element={<Section3/>} />
        <Route path="shop" element={<Section5/>} />
        <Route path="blog" element={<Section6/>} />
        <Route path="contact" element={<Section7/>}/>
      </Routes>
    </Router>   
  );
}

export default App;
