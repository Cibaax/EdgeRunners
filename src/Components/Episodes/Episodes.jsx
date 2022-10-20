import React from 'react'
import { useEffect, useState} from 'react'
import {allEpisodes} from '../../functions/functions'
import Nav from '../Nav/Nav'
import './Episodes.css';
import logoEdgerunners from '../../img/logoEdgerunners.png'
import arrowUp from '../../img/arrowUp.png'
import arrowDown from '../../img/arrowDown.png'
import trigger from '../../img/trigger.png'
import cdprojekt from '../../img/cdprojekt.png'
import netflix from '../../img/netflix.png'
const Episodes = () => {
  const [episodes, setEpisodes]= useState(null) 
  useEffect(()=>{
    allEpisodes(setEpisodes)
  },[])
  return (
    <div className='containerEpisodes'>
      <Nav/>
      {episodes!=null?(episodes.map(episodes=>(        
        <div className={`episodesCard`} key={episodes.id} id={`id${episodes.id}`}>
          <img className='imageFullEpisode'src={episodes.imgFull} alt="episodesasd" />
          <img className='cardEpisodeBorder'src={episodes.imgBorder} alt="episodesImgBorder" />
          <p className='episodeName'>{episodes.name}</p>
          <p className='episodeDescription'>{episodes.description}</p>
          <p className='episodeDuration'>{episodes.duration}</p>
          <img className='logoEdgerunnersEpisode'src={logoEdgerunners} alt="" />
          <div className='arrows'>
            <a className='arrowUp' href={`#id${episodes.id-1}`}>
              <img href={`#id${episodes.id-1}`} src={arrowUp}></img>
            </a>
            <a className='arrowDown' href={`#id${episodes.id+1}`}>
              <img href={`#id${episodes.id-1}`} src={arrowDown}></img>
            </a>
          </div>
          <div className='netflix'>
            <p>Available</p>
            <p>On</p>
            <img src={netflix} alt="" />
          </div>
          <span className='companies'>
            <a className='cdprojekt' href="http://cdprojektred.com/">
              <img src={cdprojekt} alt="" />
            </a>
            <p>x</p>
            <a className='trigger' href="http://st-trigger.co.jp">
            <img src={trigger} alt="" />
            </a>
          </span>
          
        </div>
        
      ))):('')}        
    </div>
  )
}

export default Episodes