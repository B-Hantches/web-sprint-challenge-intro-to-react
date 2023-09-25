import React, { useState } from 'react'

function Character(props) { 
    console.log(props.person.name)
    const {homeworlds, person} = props;
    console.log()
    const [showHomeworld, setShowHomeworld ] = useState(false);
    const toggleHomeworld = () => {
        setShowHomeworld(!showHomeworld);
    }
    // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
   
    <div onClick={toggleHomeworld} className='character-card'>
    <h3 className='character-name'>{props.person.name}</h3>
    {showHomeworld 
    ? <p>planet:
  <span className='character-planet'>
      {homeworlds.map((planet)=>{
        if (planet.id === person.homeworld){
          return planet.name
        }
        }
      )}
    </span>
    </p>
    
    : null
    }
    </div>
    )
  }

export default Character 
