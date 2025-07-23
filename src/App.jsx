import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';

import UploadMap from './components/UploadMap';
import MapContext, { MapProvider } from './context/MapContext';

import './App.css';

function App() {
  //const [mapFile, setMapFile] = useState(null);
  return (
    <MapProvider>
      <Routes>
        <Route path='/' element={<UploadMap/>}/>
      </Routes>
    </MapProvider>
  );
}

export default App
