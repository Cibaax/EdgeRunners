import React from 'react'
import './Music.css';
import {allCharacters} from '../../functions/functions'
import { useEffect, useState } from 'react'

const Music=()=> {
  const [characters, setCharacters]= useState(null)
      useEffect(()=>{
          allCharacters(setCharacters)
      },[])
  return (
    <>
      {characters!= null ? (
            characters.map(character=>(
                <div className='card'key ={character.id}>
                    <a href={`/character/${character.id}`}>
                    <img className='imgCard'src={character.image} alt="characterImage" />
                    </a>
                    <p>{character.name}</p>
                </div>
            ))
        ):('x')}
  </>

  )
}

export default Music