import React from 'react';
import './App.css';
import Title from './components/Title';
import { Outlet, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const hideTitleOnRoutes = ['/gifted-card/'];
  const shouldHideTitle = hideTitleOnRoutes.some(route => location.pathname.includes(route));


  return (
    <div className="App">
      {!shouldHideTitle && <Title />}
      <Outlet />
    </div>
  );
}

export default App;