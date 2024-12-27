import React from "react";
import ServicesSection from "./ESL/Components/ServicesSection";
// import TestimonialsSection from "./ESL/Components/TestimonialsSection";
import "./App.css";
import ContactForm from "./ESL/Components/ContactForm";
// import HeaderSection from "./ESL/Components/Section";
import Testimonials from "./ESL/Components/Testimonials";
import Footer from "./ESL/Components/Footer";
// import ESLServices from "./ESL/Components/ESLServices";
// import ESLGenerate from "./ESL/Components/Generer";
// import PersonalityTest from "./ESL/Components/PersonalityTest";
import Navbar2 from "./ESL/Components/Navbar2";
import Section from "./ESL/Components/Section";
// import Sec from "./ESL/Components/Sec";
import Equipes from "./ESL/Components/Equipes";
// import Faq from "./ESL/Components/Faq";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";
import ProjectManagement from "./ESL/Components/ProjectManagement";


function App() {
  const [activeComponent, setActiveComponent] = React.useState(null);

  return (
    <Router>
      <div className="app">
        <Navbar2/>
        <Routes>
          <Route path="/" element={<Section/>}/> 
          <Route path="/services" element={<ServicesSection setActiveComponent={setActiveComponent}/>}/>
          <Route path="/Equipes" element={<Equipes/>}/>
          <Route path="/contact" element={<ContactForm />}/>
          <Route path="/Testimonials" element={<Testimonials/>}/>
          <Route path="/Projets" element={<ProjectManagement />}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;