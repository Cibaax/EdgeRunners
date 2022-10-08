import React from 'react'
import {allCharacters} from '../../functions/functions'
import { useEffect, useState } from 'react'
import './Characters.css';
import Nav from '../Nav/Nav'


const Characters = () => {
  const [characters, setCharacters]= useState(null)
    useEffect(()=>{
        allCharacters(setCharacters)
    },[])
  return (
    <div> 
        <Nav/>
    <div className='characters'>
        {characters!= null ? (
            characters.map(character=>(
                <div key ={character.id}>
                    <a href={`/character/${character.id}`}>
                    <img src={character.image} alt="characterImage" />
                    </a>
                </div>
            ))
        ):('x')}
        </div>
    </div>

  )
}

export default Characters