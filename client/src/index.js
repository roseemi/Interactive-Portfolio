import './styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Nav items
import Navigation from './pages/Navigation.js';
import NotFound from './pages/NotFound.js';
import Demos from './pages/Demos.js';
import Game from './pages/Game.js';
import Travel from './pages/Travel.js';
import Portfolio from './pages/Portfolio.js';
import reportWebVitals from './reportWebVitals';

export default function App() {

  return (
    <BrowserRouter>
    <Navigation />
    <div className="scroll-smooth">
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/demos" element={<Demos />} />
        <Route path="/game" element={<Game />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
