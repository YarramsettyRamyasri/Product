//import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Componenet/Home';
import About from './Componenet/About';
import Nopage from './Componenet/Nopage';
import Navbar from './Componenet/Navbar';
import Product from './Componenet/Product';
import AvailableProduct from './Componenet/AvailableProduct';
import UpcomingProduct from './Componenet/UpcomingProduct';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='*' element={<Nopage/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/availablepr' element={<AvailableProduct/>}/>
        <Route path='/upcomingprod' element={<UpcomingProduct/>}/>
        </Routes>
        <Navbar/>
        </div>
  );
}

export default App;
