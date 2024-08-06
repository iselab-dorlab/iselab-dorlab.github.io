import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import ScrollTop from "./components/ScrollTop";

import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import MarkdownPage from "./pages/MarkdownPage";
import Members from "./pages/Members";
import Publications from "./pages/Publications";
import ResearchTopic from "./pages/ResearchTopic";

const App = () => {
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/research-topic" element={<ResearchTopic />} />
        <Route path="/publication" element={<Publications />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news/:filename" element={<MarkdownPage />} />
      </Routes>
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default App;
