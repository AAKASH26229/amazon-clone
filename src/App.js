
import './App.css';
import Navbar from './Components/Navbar/Navigation';
import MainPage from './Components/HomePage/MainPage';
import DisplayContent from './Components/DisplayContent/DisplayContent';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Checkout from './Components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <DisplayContent/> */}
       {/* <MainPage />  */}
       {/* <PlaceOrder /> */}
       <Checkout />
    </div>
  );
}

export default App;
