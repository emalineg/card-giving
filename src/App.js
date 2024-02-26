import './App.css';
import Title from './components/Title';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="App">
     <Title/>
     <Outlet />
     <Footer/> 
    </div>
  );
}

export default App;
