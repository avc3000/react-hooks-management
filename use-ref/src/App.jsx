import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const idRef = useRef(1);
  const [names, setNames] = useState([
    { id: idRef.current++, name: "Antony" },
    { id: idRef.current++, name: "Juan"}
  ]);

  const onAddName = () => {
    setNames([...names, { id: idRef.current++, name: inputRef.current.value }]);
    inputRef.current.value = "";
  };

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
        <ul>
          {
            names.map((name) => (
              <li key={name.id}>{name.name}</li>
            ))
          }
        </ul>
        <input type="text" ref={inputRef} />
        &nbsp;&nbsp;
        <button onClick={onAddName}>Agregar</button>
      </div>
    </div>
  )
}

export default App
