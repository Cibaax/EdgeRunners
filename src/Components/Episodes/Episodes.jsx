import React from 'react'
import { useEffect, useState} from 'react'
import {allEpisodes} from '../../functions/functions'
import Nav from '../Nav/Nav'
import './Episodes.css';

const Episodes = () => {
  const [episodes, setEpisodes]= useState(null) 
  useEffect(()=>{
    allEpisodes(setEpisodes)
  },[])
  return (
    <div> 
        <Nav/>
    <div className='episodes-1'>
      {episodes!=null?(
        episodes.map(episodes=>(
          <div className='episodesImages' key={episodes.id}>
            <a href={`/episode/${episodes.id}`}>
              <img src={episodes.img} alt="episodes.img" />
            </a>
              <p>{episodes.name}</p>
          </div>
        ))
      ):('')}
    </div>
    </div>
  )
}

export default Episodes