
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cupcakes from './Pages/Cupcakes/Cupcakes';
import Home from './Pages/Home/Home';
import Catering from './Pages/Catering/Catering';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import NotFound from './NotFound/NotFound';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/cupcakes' element={<Cupcakes />}></Route>
        <Route path='/catering' element={<Catering />}></Route>
        <Route path="/footer" element={<Footer/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
