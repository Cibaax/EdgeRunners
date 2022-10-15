import React from 'react'
import Nav from '../Nav/Nav'
import './Music.css'
import Tilt from 'react-vanilla-tilt';
import Image1 from '../../img/david1.png';
import Image from '../../img/David.png';

function Music() {
  return (
<div className="App">

          <Tilt className="tilt" /* style={{background: (0,0,0,0)}} */>
            <img className='cardBack'src={Image}/>
              <img className='cardCharacter'src={Image1} />
            
            
          </Tilt>
          </div>


  )
}

export default Music