import * as React from "react";

import './Nav.css'; 
function Nav(){
    return(
        <div className="Nav">
            <img className='logo-edgerunners' src="https://upload.wikimedia.org/wikipedia/commons/9/90/Cyberpunk_Edgerunners_logo.png" alt="logo-edgerunners" />
        <nav>
            
            <ul>
            <li><a href="#logo"><i class="icon-home"></i>Home</a></li>
            <li><a href="#about"><i class="icon-user"></i>About</a></li>
            <li><a href="#portfolio"><i class="icon-thumbs-up-alt"></i>Portfolio</a></li>
            <li><a href="#services"><i class="icon-gear"></i>Services</a></li>
            <li><a href="#gallery"><i class="icon-picture"></i>Gallery</a></li>
            <li><a href="#contact"><i class="icon-phone"></i>Contact</a></li>
            </ul>
        </nav>
        </div>
    )
}
export default Nav