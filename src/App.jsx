import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

export default function App() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </header >
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
}
