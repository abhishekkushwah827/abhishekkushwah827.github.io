import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

function Navbar() {



  
  return (
<>

<div className="container-fluid nav_bg">

    <div className="row">
    
        <div className="col-10 mx-auto" >
        
      
<nav class="navbar  navbar-expand-lg navbar-light bg-light">
  <NavLink  class="navbar-brand" exact to="#">Navbar</NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class=" collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto navbar-inverse">
      <li class="nav-item active">
        <NavLink exact activeClassName="menu_active" class="nav-link" to="/">Home <span class="sr-only">(current)</span></NavLink>
      </li>
      <li class="nav-item">
      <NavLink activeClassName="menu_active" class="nav-link" to="/Service">service<span class="sr-only">(current)</span></NavLink>
      </li>
      <li class="nav-item">
        <NavLink activeClassName="menu_active" class="nav-link" to="/About">About</NavLink>
      </li>
      <li class="nav-item">
        <NavLink activeClassName="menu_active" class="nav-link" to="/Contact">Contact</NavLink>
      </li>
     
    </ul>
   
  </div>
</nav>
</div>
</div>
</div>

</>
 );
}

export default Navbar;
