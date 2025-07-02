import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MapContext from './MapContext';

function UploadMap(){
    const { setMapFile } = useContext(MapContext);
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(file){
            setMapFile(file);
            navigate('/map');
        }else{
            console.log("No file selected");
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="file" accept="image/*" onChange={e => setFile(e.target.files[0])} />
            <button type="submit">Upload</button>
        </form>
  );
}

export default UploadMap