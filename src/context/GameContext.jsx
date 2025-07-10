import { createContext, useState } from "react";

const gameContext = createContext();

export const GameProvider = ({children}) => {
    const [characters, setCharacters] = useState([]);
    const [enemies, setEnemies] = useState([]);
    const [selectedToken, setSelectedToken] = useState([]);
}

const addCharacter = (character) => {
    setCharacters(prev => [...prev, character]);
}

const addEnemy = (enemy) => {
    setEnemies(prev => [...prev, enemy]);
}

const values = {
    characters,
    enemies,
    selectedToken,
    setSelectedToken,
    addCharacter,
    addEnemy
};

return (
    <gameContext.Provider value={values}>
        {children}
    </gameContext.Provider>
)

export default gameContext;