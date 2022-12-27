import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const Stopwatch = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => {
        console.log(t);
        return t + 1;
      });
    }, 1000);
  
    return () => {
      clearInterval(interval);
    }
  }, []);  

  return (
    <div>Time: {time}</div>
  );
}

function App() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("/names.json").then((response) => response.json()).then((data) => setNames(data));
  }, []);

  const [selectedNameDetails, setSelectedNameDetails] = useState(null);

  const onSelectedNameChange = (name) => {
    fetch(`/${name}.json`).then((response) => response.json()).then((data) => setSelectedNameDetails(data)); 
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Stopwatch />
        <br />
        <div>
          {
            names.map((name, id) => (
              <button className='button' key={id} onClick={() => onSelectedNameChange(name)}>{name}</button>
            ))
          }
        </div>
        <br />
        <div>{JSON.stringify(selectedNameDetails)}</div>
      </div>
    </div>
  )
}

export default App
