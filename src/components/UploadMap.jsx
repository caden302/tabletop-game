import { useState, useContext } from 'react';
import Background from '../assets/TableTop_Background.png';
import CharacterToken from './CharacterToken';
import EnemyToken from './EnemyToken';
import MapContext from '../context/MapContext.jsx';

function UploadMap(){
    const {mapImg,setMapImg} = useContext(MapContext);
    
    if(mapImg) {
        console.log(mapImg);
        return (
            <div style={{ position: 'relative', display: 'inline-block' }}>
                <img 
                    src={mapImg}
                    alt="Uploaded Map"
                    style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', display: 'block',  margin: '0'}}
                />
                <CharacterToken
                ></CharacterToken>
                <EnemyToken
                ></EnemyToken>
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
            <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                        const file = e.target.files[0];
                        e.preventDefault();
                        if(file){
                            const mapUrl = URL.createObjectURL(file);
                            setMapImg(mapUrl);
                        }
                    }
                }
            />
            <button type="submit">Upload</button>
        </div>
    )
};

export default UploadMap