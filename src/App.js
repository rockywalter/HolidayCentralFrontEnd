import './App.css';
import NavigationBar from './components/NavigationBar';
import FlightBook from './pages/FlightBook';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div>
    <NavigationBar/>
    <Routes>     
      <Route path="/flight" element={<FlightBook />} />
    </Routes> 
    
    </div>

  </Router>

  );
}

export default App;
