import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import UploadMap from './uploadMap';
import DisplayMap from './DisplayMap';
import MapContext from './MapContext';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [mapFile, setMapFile] = useState(null);
  return (  
    <MapContext.Provider value={{mapFile, setMapFile}}>
      <Router>
        <Routes>
          <Route path='/' element={<UploadMap/>}/>
          <Route path='/map' element={<DisplayMap/>}/>
        </Routes>
      </Router>
    </MapContext.Provider>
  );
  /*const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    setGreeting(`Hello, ${name}`);
  };

  return (
    <div className="App">
      <h1>Welcome to My Tabletop App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Greet Me</button>
      </form>
      {greeting && <p>{greeting}</p>}
    </div>
  );*/


  /*const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )*/
}

export default App
