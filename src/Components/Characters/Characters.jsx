import React from 'react'
import {allCharacters} from '../../functions/functions'
import { useEffect, useState } from 'react'
import './Characters.css';
import Nav from '../Nav/Nav'
import david from '../../img/David.png'

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
              <div className='card'key ={character.id}>
                  <p>{characters.name}</p>
                    <a href={`/character/${character.id}`}>
                    <img className='imgCard'src={character.image} alt="characterImage" />
                    </a>
                </div>
            ))
        ):('x')}
        </div>
    </div>

  )
}

export default Characters