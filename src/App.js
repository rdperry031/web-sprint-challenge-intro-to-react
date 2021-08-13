import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character'
import styled from 'styled-components';
import { GlobalStyles } from './theme/GlobalStyles';

const StyledHeader = styled.h1`
  font-family: 'Star Warsesque';
  font-size: 7rem;
  line-height: 1;
  color: #FFE81F;
  `

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    axios.get('https://swapi.dev/api/films')
      .then(res => {
        console.log(res)
      })
  },[])

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(res => {
        console.log(res.data)
        setCharacters(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  },[])
  
  return (
    <div className="App">
    <GlobalStyles/>
      <StyledHeader className="Header">Go See A<br></br> Star<br></br> War</StyledHeader>
    {characters.map(character => <Character key = {character.name} character = {character}/>)}
   </div>
  );
}

export default App;
