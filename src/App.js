import { useEffect, useState } from 'react';
import './App.css';
import Fal from './components/Fal';
import Ganjine from './components/Ganjine';
import Main from './components/Main';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



const FAL_API = "https://ganjgah.ir/api/ganjoor/hafez/faal"

function App() {
  // const [fal, setFal] = useState([]);
  const fal = useState([])

  

  return (
    <div className="App">
      {/* <Main /> */}
      
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">صفحه اصلی</Link>
              </li>
              <li>
                <Link to="/fal">فال حافظ</Link>
              </li>
              <li>
                <Link to="/ganjine">گنجینه</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element= {<Main />} /> 
              

            <Route path="/fal" element ={<Fal />} />

            <Route path="/ganjine" element={<Ganjine />} />

          </Routes>
        </div>
      </Router>
      
    </div>
  );
}





function ganjine() {
  return <Ganjine />
}

export default App;
