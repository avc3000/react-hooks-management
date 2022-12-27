import { useReducer } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function UserForm() {
  const [state, dispatch] = useReducer((state,action) => ({ ...state, ...action }), { first: "", last: "" });

  return(
    <div>
      <input type="text" value={state.first} onChange={(e) => dispatch({ first: e.target.value })} />
      &nbsp;&nbsp;
      <input type="text" value={state.last} onChange={(e) => dispatch({ last: e.target.value })} />
      <br /><br />
      <div>Nombre: {state.first}</div>
      <div>Apellido: {state.last}</div>
    </div>
  )
}

function NameList() {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SET_NAME":
        return { ...state, name: action.payload };
      case "ADD_NAME":
        return { ...state, names: [ ...state.names, state.name ], name: "" };
    }
  }, {
    names: [],
    name: "",
  });

  return (    
    <div>
      <ul>
        {
          state.names.map((name, index) => (
            <li key={index}>{name}</li>
          ))
        }
      </ul>
      <input type="text" value={state.name} onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })} />
      &nbsp;&nbsp;
      <button onClick={() => dispatch({ type: "ADD_NAME" })}>Agregar</button>
    </div>
  )
}

function App() {
  return(
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
        <UserForm />
        <NameList />
      </div>
    </div>
  )
}

export default App;
