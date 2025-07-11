import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';

import UploadMap from './components/UploadMap';
import DisplayMap from './components/DisplayMap';
import MapContext from './context/MapContext';

import './App.css';

function App() {
  //const [mapFile, setMapFile] = useState(null);
  return (  
    <Routes>
      <Route path='/' element={<UploadMap/>}/>
    </Routes>
  );
}

export default App
