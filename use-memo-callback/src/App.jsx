import { useState, useMemo, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function SortedList({ list, sortFunc }) {
  console.log("Renderizando lista ordenada ");

  const sortedList = useMemo(() => {
    console.log("Ejecutando lista");
    return [...list].sort(sortFunc);
  }, [list, sortFunc]);

  return (
    <div className='div'>{sortedList.join(", ")}</div>
  )
}

function App() {
  const [numbers] = useState([10, 20, 30]);
  const total = useMemo(() => numbers.reduce((acc, number) => acc + number, 0), [numbers]);
  const [names] = useState(["Juan", "Pedro", "Diego"]);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const countTotal = count1 + count2;
  const sortFunc = useCallback((a, b) => a.localeCompare(b) * -1, []);  

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
        <div className='div'>Total: {total}</div>
        <div className='div'>Nombres: {names.join(", ")}</div>
        <SortedList list={names} sortFunc={sortFunc} />
        <div className='div'>
          <button onClick={() => setCount1(count1 + 1)}>Count1: {count1}</button>&nbsp;&nbsp;
          <button onClick={() => setCount2(count2 + 1)}>Count2: {count2}</button>
        </div>
        <div className='div'>Total: {countTotal}</div>
      </div>
    </div>
  )
}

export default App
