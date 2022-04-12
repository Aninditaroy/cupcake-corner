
import { Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cupcakes from './Pages/Cupcakes/Cupcakes';
function App() {
  return (
    <div>
      <Header />
      <Cupcakes/>
    </div>
  );
}

export default App;
