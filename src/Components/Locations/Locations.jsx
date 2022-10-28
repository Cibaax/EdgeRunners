import React from 'react'
import './locations.css'
import Nav from '../Nav/Nav'
import { useEffect, useState} from 'react'
import {allLocations} from '../../functions/functions'
function Locations() {
  const [locations, setLocations]= useState(null) 
  useEffect(()=>{
    allLocations(setLocations)
  },[])
  return (
    <div className='background'>
      <Nav/>
      {locations!=null?(locations.map(locations=>(
        <div className='selections'>
          <img className={`selectedLocation${locations.id}`} src={locations.selected} alt="" />
          <img className={`selectedLocationHover${locations.id}`} src={locations.selectedHover} alt="" />
        </div>
      ))):('')}
    </div>
  )
}

export default Locations