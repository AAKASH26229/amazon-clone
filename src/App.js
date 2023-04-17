
import './App.css';
import Navbar from './Components/Navbar/Navigation';
import MainPage from './Components/HomePage/MainPage';
import DisplayContent from './Components/DisplayContent/DisplayContent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <DisplayContent/>
       {/* <MainPage />  */}
    </div>
  );
}

export default App;
