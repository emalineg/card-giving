import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import CardsList from './components/CardsList';
import About from './components/About';
import SpecificCardDetails from './components/SpecificCardDetails';
import GiftedCard from './components/GiftedCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<CardsList />} />
        <Route path="about" element={<About />} />
        <Route path="specific-card/:id" element={<SpecificCardDetails />} />
        <Route path="gifted-card/:urlSlug" element={<GiftedCard/>} />
      </Route>
    </Routes>
  </Router>,
  //document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
