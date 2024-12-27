import React from "react";
import ServicesSection from "./ESL/Components/ServicesSection";
import "./App.css";
import ContactForm from "./ESL/Components/ContactForm";
import Testimonials from "./ESL/Components/Testimonials";
import Footer from "./ESL/Components/Footer";
import Navbar2 from "./ESL/Components/Navbar2";
import Section from "./ESL/Components/Section";
import Equipes from "./ESL/Components/Equipes";
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