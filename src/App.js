import { useEffect, useState } from 'react';
import './App.css';
import Fal from './components/Fal';
import Main from './components/Main';
const FAL_API = "https://ganjgah.ir/api/ganjoor/hafez/faal"

function App() {
  // const [fal, setFal] = useState([]);
  const fal = useState([])

  useEffect(() => {
    fetch(FAL_API)
    .then((res) => res.json())
    .then ((data) => {
      console.log(data);
      // setFal(data);
      document.getElementById("poemContainer").innerHTML=data.htmlText;
    })
  }, [])

  return (
    <div className="App">
      {/* <Fal key={fal.id} {...fal}/> */}
      <Main />
    </div>
  );
}

export default App;
