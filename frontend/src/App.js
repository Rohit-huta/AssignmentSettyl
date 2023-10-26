import Card from './components/Card';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Register from './screens/Register';
import './App.css';
import './tstyle.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './screens/Login';
import Home from './screens/Home';
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      <Routes>
        
        <Route path='/' element={ <Home />}></Route>
        <Route path='/register' element={ <Register />}></Route>
        <Route path='/login' element={ <Login />}></Route>
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
