import * as React from "react";

import './Nav.css'; 
function Nav(){
  return(
    <nav>
      <ul>
        <li><a href="/characters"><i class="Characters"></i>Characters</a></li>
        <li><a href="/music"><i class="home"></i>Music</a></li>
       {/*  <li>
          <Link to="/Characters" class="characters" >Characters</Link>
        </li>
        <li>
          <Link to='/Music' class='music'>Music</Link>
        </li> */}
      </ul>
            <a href="/">
                <img  className='logo-edgerunners' src="https://upload.wikimedia.org/wikipedia/commons/9/90/Cyberpunk_Edgerunners_logo.png" alt="logo-edgerunners" />
            </a>
            <ul>
            <li><a href="/episodes"><i class="episodes"></i>Episodes</a></li>
            <li><a href="/locations"><i class="locations"></i>Locations</a></li>
      </ul>
    </nav>
  )
}
export default Nav