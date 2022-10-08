import './App.css';
import { LogoFreeCodeCamp } from './LogoFreeCodeCamp';
import { ListaDeTareas } from './ListaDeTareas';

function App() {
  return (
    <div className="App">
      <LogoFreeCodeCamp/>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
          <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
