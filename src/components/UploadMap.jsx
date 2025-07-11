import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
//import MapContext from '../context/MapContext';
import Background from '../assets/TableTop_Background.png';
import Token from './Token';
import TokenImg from '../assets/token for testing.jpg';
import Map from '../assets/dnd map for testing.webp'

function UploadMap(){
    //const {setMapFile} = useContext(MapContext);
    const [file, setFile] = useState(null);
    //const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!file){
            console.log("No file selected");
        }
    };
    
    if(file) {
        return (
            <div style={{ position: 'relative', display: 'inline-block' }}>
            <img 
                src={URL.createObjectURL(file)}
                alt="Uploaded Map"
                style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', display: 'block',  margin: '0'}}
            />
            <Token
                imgSrc={TokenImg}
            />
            </div>
        )
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: `url(${Background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh',
            }}
            >
            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '10px',
                    borderRadius: '8px',
                }}
            >
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <button type="submit">Upload</button>
            </form>
        </div>
    )
};

export default UploadMap