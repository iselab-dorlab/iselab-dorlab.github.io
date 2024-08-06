import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollTop from './components/ScrollTop';

import MarkdownPage from './pages/MarkdownPage';
import Home from './pages/Home';
import Members from './pages/Members';
import ResearchTopic from './pages/ResearchTopic';
import Publications from './pages/Publications';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/members" element={<Members />} />
                    <Route path="/researchtopic" element={<ResearchTopic />} />
                    <Route path="/publications" element={<Publications />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/news/:filename" element={<MarkdownPage />} />
                </Routes>
                <Footer />
                <ScrollTop />
            </div>
        </Router>
    );
}

export default App;
