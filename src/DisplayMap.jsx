import {useContext, useState} from 'react';
import MapContext from './MapContext';
import Token from './Token';
import map from './assets/dnd map for testing.webp'
import TokenImg from './assets/token for testing.jpg';

function DisplayMap(){
    const {mapFile} = useContext(MapContext);

    const onMouseClick = (e) => {
        console.log(e.clientX + e.clientY);
    };

    /*if(!mapFile){
        return <p>No map uploaded</p>;
    }*/

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <img 
                src={map}
                alt="Uploaded Map"
                style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', display: 'block',  margin: '0'}}
            />
            <Token
                imgSrc={TokenImg}
            />
        </div>
    )
}

export default DisplayMap