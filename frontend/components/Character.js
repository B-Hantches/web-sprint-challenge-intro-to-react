import React, { useState } from 'react';

function Character(props) {
  const [showHomeworld, setShowHomeworld] = useState(false);

  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld);
  }

  return (
    <div>
      <h1 onClick={toggleHomeworld}>
        {props.person.name}
        {showHomeworld ? " - Homeworld Showing" : " - Homeworld Hidden"}
      </h1>
      {showHomeworld && (
        <div className='homeWorld container'>
          {/* Display homeworld information here */}
          <p>Homeworld: {props.person.homeworld}</p>
        </div>
      )}
    </div>
  );
}

export default Character;
