import React from "react";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import "./App.css";
import ContactForm from "./components/ContactForm";
import HeaderSection from "./components/Section";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ESLServices from "./components/ESLServices";
import 'bootstrap/dist/css/bootstrap.min.css';
import ESLGenerate from "./components/Generer";
import PersonalityTest from "./components/PersonalityTest";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Sec from "./components/Sec";
import Equipes from "./components/Equipes";
import Faq from "./components/Faq";


function App() {
  const [activeComponent, setActiveComponent] = React.useState(null);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Section />} /> 
          <Route path="/services" element={<ServicesSection setActiveComponent={setActiveComponent} />} />
          <Route path="/Equipes" element={<Equipes />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/Testimonials" element={<Testimonials />} /> 

        </Routes>
        <Faq />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
