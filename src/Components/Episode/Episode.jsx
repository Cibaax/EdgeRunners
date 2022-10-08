import React from 'react'
import { useEffect, useState} from 'react'
import { singleEpisode } from '../../functions/functions'
import Nav from '../Nav/Nav'
import { useParams } from 'react-router-dom'

const Episode = () => {
    const[episode, setEpisode]= useState(null)
    const params = useParams()
    useEffect(()=>{
        singleEpisode(params.id, setEpisode)
    },[])
  return (
    <div>
        <Nav/>
        {episode!=null?(
      <div className='episodee'>
      <h2>{episode.name}</h2>
      <a href={episode.link}>
        <img src={episode.img} alt="asdasd" />
      </a> 
      <p>{episode.link}</p>
      <h2>Duration{episode.status}</h2>
      <p>{episode.description}</p>
      </div>
    ):('')}
    </div>
  )
}

export default Episode