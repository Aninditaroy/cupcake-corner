
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cupcakes from './Pages/Cupcakes/Cupcakes';
import Home from './Pages/Home/Home';
import Catering from './Pages/Catering/Catering';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cupcakes' element={<Cupcakes />}></Route>
        <Route path='/catering' element={<Catering />}></Route>
      </Routes>
    </div>
  );
}

export default App;
