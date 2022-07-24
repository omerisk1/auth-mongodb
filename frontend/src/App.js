
import './App.css';
import Login from './pages/Login';
import Weather from './pages/Weather';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Register from './pages/Register';


function App() {
  return (
    <div className="App">
      <Routes>
          <Route exath path="/" element={<Register />}/>
          <Route exath path="/Login" element={<Login />}/>
          <Route exath path="/Weather" element={<Weather />}/>
      </Routes>
    </div>
  );
}

export default App;
