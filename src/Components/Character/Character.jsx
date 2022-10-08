import React from 'react'
import { useParams } from 'react-router-dom'
import {singleCharacter} from '../../functions/functions'
import { useEffect, useState} from 'react'
import Nav from '../Nav/Nav'
const Character = () => {
  const[character,setCharacter] = useState(null)
  const params = useParams()
  useEffect(()=>{
    singleCharacter(params.id, setCharacter)
  },[])
  return (
    <>
    <Nav></Nav>
    {character!=null?(
      <div className='character'>
      <h2>{character.name}</h2>
      <img src={character.image} alt="asdasd" />
      <h2>Status: {character.status}</h2>
      <p>{character.description}</p>
      </div>
    ):('')}
    </>
  )
}

export default Character