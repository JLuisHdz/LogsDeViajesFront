import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className='form'>
        <div>
          <p>CREAR LOG</p>
        </div>
        <div className='form-control'>
          <label>Usuario</label>
          <input type="text" placeholder='nombre'/>
        </div>
        <div className='form-control'>
          <label>Titulo</label>
          <input type="text" placeholder='titulo'/>
        </div>
        <div className='form-control'>
          <label>Descripcion</label>
          <input type="text" placeholder='descripcion'/>
        </div>
        <div className='form-control'>
          <label>ubicacion</label>
          <input type="text" placeholder='ubicacion'/>
        </div>
        <div className='form-control'>
          <label>fecha</label>
          <input type="text" placeholder='fecha'/>
        </div>
        <div className='btn'>
          <button className='btna'>Agregar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
