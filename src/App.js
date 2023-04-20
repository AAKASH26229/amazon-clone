
import './App.css';
import Navbar from './Components/Navbar/Navigation';
import MainPage from './Components/HomePage/MainPage';
import DisplayContent from './Components/DisplayContent/DisplayContent';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Checkout from './Components/Checkout/Checkout';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return ( 
    <Router>
      <div className="App">
        <Navbar />

        <Routes>  
         
            

          <Route path="/display" element={<DisplayContent />} />

          <Route path="/order/:id" element={<PlaceOrder />} />
          
          <Route path="/checkout" element={<Checkout />}/>

          <Route path="" element={<MainPage />} />
            
        </Routes>

      </div>
    </Router>
  );
}

export default App;
