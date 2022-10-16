import React from 'react'
import {allCharacters} from '../../functions/functions'
import { useEffect, useState, useRef } from 'react'
import './Characters.css';
import Nav from '../Nav/Nav'
import arrowLeft from '../../img/arrow_left.png'
import arrowRight from '../../img/arrow_right.png'
import VanillaTilt from 'vanilla-tilt';
import card from '../../img/card2.png'
import logoEdgerunners from '../../img/logoEdgerunners.png'
function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);
  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

const Characters = () => {
  const [characters, setCharacters]= useState(null)
    useEffect(()=>{
        allCharacters(setCharacters)
    },[])
    const options = { max: 15,
		                  speed: 400,};
      
  return (
    <div className='containerCharacters'>
    

   
    <div className='containerRotate'>
    <div className='characters'>
        {characters!= null ? (
            characters.map(character=>(
              <a href={`/character/${character.id}`}>
                <Tilt className="tiltCardCharacter"  options={options} key ={character.id} id={`item${character.id}`}>
                <img className='backgorundCharacter'src={card} alt="characterImage" />
                <img className='imageCharacter'src={character.imageCard} alt="characterImage" />
                <p className='nameCharacter'>{character.alias}</p>
                <img className='logoEdgerunnersCard'src={logoEdgerunners} alt="logoEdgerunners" />
                <p className='statusCharacter'>STATUS:<span className={character.status === 'Alive' ? 'liveText' : 'deadText'}>{character.status}</span></p>
              </Tilt>
              </a>
              ))
        ):('x')}      
        <div> </div>
      </div>
    </div>
    <Nav/>
    </div>

  )
  
}

export default Characters