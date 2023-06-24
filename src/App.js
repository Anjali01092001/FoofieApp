import './App.css';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Navbar from './Components/Navbar';
import NotFound from './Components/NotFound';
import Cardsdetails from './Components/Cardsdetails';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">   
      <Router>
        <Navbar></Navbar>
            <Routes>
              <Route path='/home' exact Component={Home} />
              <Route path='/carddetails' Component={Cardsdetails} />
              <Route path='/' exact Component={Cart} />
              <Route path='/notfound' Component={NotFound} />
            </Routes>
          </Router>
  
    </div>
  );
}

export default App;
