import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';

import UploadMap from './components/UploadMap';
import DisplayMap from './components/DisplayMap';
import MapContext from './context/MapContext';

import './App.css';

function App() {
  const [mapFile, setMapFile] = useState(null);
  return (  
    <MapContext.Provider value={{mapFile, setMapFile}}>
      <Routes>
        <Route path='/' element={<UploadMap/>}/>
        <Route path='/map' element={<DisplayMap/>}/>
        <Route path='/characters' element={<Characters/>}/>
        <Route path='/monsters' element={<Monst/>}/>
        <Route path='/items' element={<Items/>}/>
        <Route path='/spells' element={<Spells/>}/>
      </Routes>
    </MapContext.Provider>
  );
}

export default App
