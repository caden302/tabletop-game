import { createContext, useState } from 'react';

const MapContext = createContext();

export const MapProvider = ({children}) => {
    const [mapImg, setMapImg] = useState(null);
    const [tokens, setTokens] = useState([]);

    const addToken = (token) => setTokens((prev) => [...prev, token]);
    const removeToken = (id) => setTokens((prev) => prev.filter(t => t.id !== id));

    return (
        <MapContext.Provider value={{mapImg, setMapImg, tokens, addToken, removeToken}}>
            {children}
        </MapContext.Provider>
    );
};
export default MapContext;