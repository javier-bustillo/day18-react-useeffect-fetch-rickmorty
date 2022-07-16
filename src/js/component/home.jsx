//import React and hooks
import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {
  //destructuring useState
  const [characters, setCharacters] = useState([]);
  //destructuring useState
  const [locations, setLocations] = useState([]);

  //useEffect
  useEffect(() => {
    //fetch for character
    fetch("https://rickandmortyapi.com/api/character") /* URL where data is */
      .then((resp) => resp.json()) /* convert response into JSON */
      .then((data) => setCharacters(data.results)); /* store response into data and set characters*/ 
    //fetch for location
    fetch("https://rickandmortyapi.com/api/location") /* URL where data is */
      .then((resp) => resp.json()) /* convert response into JSON */
      .then((data) => setLocations(data.results)); /* store response into data and set locations*/
  }, []); /* empty array for single execution */ 
  
  // Iterate characters set
  const charactersArr = characters.map((item) => (
    <li key={item.id}> {/*by id, without id use index */}
      Character name: {item.name} <br></br> Character Location: {item.location.name}
    </li>    
  ));
    // Iterate locations set
  const locationsArr = locations.map((item) => (
    <li key={item.id}>{/*by id, without id use index */}
      Location: {item.name} Type: {item.type}
    </li>
  ));
  return (
    <div>
      <h1 className="text-center mt-5">Characters</h1>
      {/*insert new array returned from map() */}
      {charactersArr}
      <h1 className="text-center mt-5">Locations and Type of Locations</h1>
      {/*insert new array returned from map() */}
      {locationsArr}
    </div>
  );
};
{/*export component*/}
export default Home;
