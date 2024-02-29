import React from 'react';
import './App.css';
import Title from './components/Title';
import Footer from './components/Footer';
import { Outlet, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const hideTitleOnRoutes = ['/components/GiftedCard.js'];

  return (
    <div className="App">
      {!hideTitleOnRoutes.includes(location.pathname) && <Title />}
      <Outlet />
      <Footer /> 
    </div>
  );
}

export default App;