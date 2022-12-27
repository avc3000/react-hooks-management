import reactLogo from './assets/react.svg'
import './App.css'
import { PokemonProvider, usePokemon } from './store'

function SearchBox() {
  const { search, setSearch } = usePokemon();

  return (
    <input type='text' className='text' placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
  )
}

const PokemonList = () => {
  const { pokemon } = usePokemon();

  return (
    <div>
      {
        pokemon.map((p) => (
          <div className='card' key={p.id}>
            <img className='img'
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`}
              alt=""
            />
            <h3>{p.name}</h3>
          </div>
        ))
      }
    </div>
  )
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
      <PokemonProvider>
        <SearchBox />
        <PokemonList />
      </PokemonProvider>
    </div>
  )
}

export default App
