import React from "react";
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";

import Navbar2 from "./ESL/Components/Navbar2";
import Footer from "./ESL/Components/Footer";
import Section from "./ESL/Components/Section";
import ServicesSection from "./ESL/Components/ServicesSection";
import ContactForm from "./ESL/Components/ContactForm";
import Testimonials from "./ESL/Components/Testimonials";
import Equipes from "./ESL/Components/Equipes";
import ProjectManagement from "./ESL/Components/ProjectManagement";
import Faq from "./ESL/Components/Faq";
import BoiteMessage from "./ESL/Components/BoiteMessage";
import Guide from "./ESL/Components/Guide";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar2 />
        <main className="content">
          <Routes>
            <Route path="/" element={<Section />} />
            <Route path="/services" element={<ServicesSection />} />
            <Route path="/Equipes" element={<Equipes />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/Testimonials" element={<Testimonials />} />
            <Route path="/Projets" element={<ProjectManagement />} />
            <Route path="/FAQ" element={<Faq />} />
            <Route path="/BoiteMessage" element={<BoiteMessage />} />
            <Route path="/Guide" element={<Guide />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;