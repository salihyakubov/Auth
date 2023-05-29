import { Button } from 'react-bootstrap';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Header from './Layout/Header/Header';
import './styles/style.scss'
import Login from './pages/Login/Login';
import Layout from './Layout/Layout';
import Registr from './pages/Registration/Registr';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='' element={<Home/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='about' element={<About/>} />
        </Route>

        <Route path='/login' element={<Login/>} />
        <Route path='/registr' element={<Registr/>} />
      </Routes>


    </div>
  );
}

export default App;
