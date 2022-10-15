import * as React from "react";

import './Nav.css'; 
function Nav(){
  return(
    <nav>
      <ul>
        <li><a href="/characters#item0"><i className="charactersNav"></i>CHARACTERS</a></li>
        <li><a href="/music"><i className="home"></i>MUSIC</a></li>
      </ul>
            <a href="/">
                <img  className='logo-edgerunners' src="https://upload.wikimedia.org/wikipedia/commons/9/90/Cyberpunk_Edgerunners_logo.png" alt="logo-edgerunners" />
            </a>
            <ul>
            <li><a href="/episodes"><i className="episodes"></i>EPISODES</a></li>
            <li><a href="/locations"><i className="locations"></i>LOCATIONS</a></li>
      </ul>
    </nav>
  )
}
export default Nav