import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./Characters.scss"; 

const Characters = () => {
  const { characters, getCharacters } = useContext(GlobalContext);

  useEffect(() => {
    getCharacters();
  }, []);

  if (characters.length <= 0) {
    return <p className="loading-message">Cargando...</p>; 
  }

  return (
    <div className="characters-container">
      {characters.map(character => {
        return (
          <div key={character.id} className="character-card">
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
