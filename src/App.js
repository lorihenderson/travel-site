import './App.css';
import Attractions from './components/Attractions';
import Bookings from './components/Bookings';
import CurrencyConverter from './components/CurrencyConverter';
import Home from './components/Home';
import Weather from './components/Weather';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Navbar';
// import CurrencyRow from './components/CurrencyRow';


function App() {
  return (
      <div className="App" id="outer-container">
        {/* <Navbar /> */}
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/currencyconverter" element={<CurrencyConverter />} />
            <Route path="/attractions" element={<Attractions />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/weather" element={<Weather />} />
          </Routes>
        </div>
      </div>
    // <>

    //   {/* <Navbar />
    //   <Home /> */}
    // </>
    // BACKUP CODE
    // <nav id="sidebar">
    //   <NavLink to="/">Home</NavLink>
    //   <NavLink to="/">Currency Converter</NavLink>
    //   <NavLink to="/">Attractions</NavLink>
    //   <NavLink to="/">Bookings</NavLink>
    //   <NavLink to="/">Weather</NavLink>
    // </nav>
  );
}

export default App;
