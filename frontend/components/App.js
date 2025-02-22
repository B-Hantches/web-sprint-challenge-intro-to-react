import React, {useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  const [planets, setPlanets ] = useState ([])
  const [ people, setPeople] = useState ([])
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state

  useEffect (() => {
    axios.get(urlPlanets)
    .then((response) => {
      console.log(response.data,"planets")
      setPlanets(response.data);
    })
    .catch((error)=> {
      console.error('Error fetching planets:', error);
    });
    axios.get(urlPeople)
    .then((response) => {
      console.log(response.data,"people")
      setPeople(response.data);
    })
    .catch((error) => {
      console.error('Error fetching people', error)
    });
  }, []);
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {people.map((person) => (
        <Character key={person.id} person={person} homeworlds={planets} />
      ))}
      
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
