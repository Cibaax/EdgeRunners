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
    <> 
        <Nav/>
    <div className='episodes-1'>
      {episodes!=null?(
        episodes.map(episodes=>(
          <div className='episodesCard' key={episodes.id}>
            <a className='imageEpisode' href={`/episode/${episodes.id}`}>
              <img src={episodes.img} alt="episodes.img" />
              <p>{episodes.name}</p>
            </a>
            
          </div>
        ))
      ):('')}
    </div>
    </>
  )
}

export default Episodes