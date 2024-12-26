import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Components/Home';
// import About from './Components/About';
// import Blog from './Components/Blog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Router>
      <div>
        <nav>
          <a href="/">Home</a> | <a href="/about">About</a> | <a href="/blog">Blog</a>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
      </div>
    </Router> */}

      <App/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals