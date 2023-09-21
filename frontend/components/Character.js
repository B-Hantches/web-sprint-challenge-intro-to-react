import React, { useState } from 'react';
import axios from 'axios';

function Character() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get('https://swapi.dev/api/people/');
      setCharacters(response.data.results);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };

  const fetchHomeWorld = async (homeworldURL) => {
    try {
      const response = await axios.get(homeworldURL);
      setSelectedCharacter(response.data);
    } catch (error) {
      console.error('Error fetching homeworld:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchCharacters}>Fetch Star Wars Characters</button>
      <ul>
        {characters.map((character) => (
          <li key={character.name}>
            {character.name}{' '}
            <button onClick={() => fetchHomeWorld(character.homeworld)}>
              Show Home World
            </button>
          </li>
        ))}
      </ul>
      {selectedCharacter && (
        <div>
          <h2>{selectedCharacter.name}</h2>
          <p>Population: {selectedCharacter.population}</p>
        </div>
      )}
    </div>
  );
}

export default Character;
