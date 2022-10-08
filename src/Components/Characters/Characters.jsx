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
                <div classNmae='card'key ={character.id}>
                    <a href={`/character/${character.id}`}>
                    <img className='imgCard'src={character.image} alt="characterImage" />
                    </a>
                    <img className='nameCard'src={david} alt="" />
                </div>
            ))
        ):('x')}
        </div>
    </div>

  )
}

export default Characters