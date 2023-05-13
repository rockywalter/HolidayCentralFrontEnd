import './App.css';
import NavigationBar from './components/NavigationBar';
import FlightBook from './pages/FlightBook';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HotelBook from './pages/HotelBook';
import Cart from './pages/Cart';
import PackageBook from './pages/PackageBook';

function App() {
  return (
    <Router>
    <div>
    <NavigationBar/>
    <Routes>     
      <Route path="/flight" element={<FlightBook />} />
      <Route path="/hotel" element={<HotelBook />} />
      <Route path="/package" element={<PackageBook />} />
      <Route path="/cart/:price" element={<Cart/>} />
      
    </Routes> 
    
    </div>

  </Router>

  );
}

export default App;
