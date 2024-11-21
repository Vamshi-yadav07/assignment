import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./components/HomePage";
import Footer from "./components/Footer/Footer";
import Team from "./components/Team";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";
import SpendCraftTimeline from './components/Mechanism'
import Pricing from "./components/Price";




const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<Footer />} />
    <Route path="/team" element={<Team />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/contact" element={<ContactUs />} />
    <Route path="/mechanism" element={<SpendCraftTimeline />} />
    <Route path="/pricing" element={<Pricing />} />


    {/* If you want a redirect, use the following */}
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default App;
