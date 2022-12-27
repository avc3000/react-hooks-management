import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function NameList() {
  const [list, setList] = useState(["Jhon", "Jill", "Jack"]);
  const [name, setName] = useState(() => "Antony");

  const onAddName = () => {
    setList([...list, name]);
    setName("");
  };

  return (
    <div className='list'>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
      &nbsp;&nbsp;
      <button className='button' onClick={onAddName}>Agregar</button>
    </div>
  );
}

function Counter() {
  let [count, setCount] = useState(0);

  function addOne() {
    setCount(count + 1);
  }

  return (
    <div>
      <button className='button' onClick={addOne}>Contar = {count}</button>
    </div>
  );
}

function App() {
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
        <Counter />
        <NameList />
      </div>
    </div>
  )
}

export default App
