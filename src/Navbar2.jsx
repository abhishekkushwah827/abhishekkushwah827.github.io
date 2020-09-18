import React from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar,Nav} from "react-bootstrap"

function Navbar2() {




  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto navcss">
            <NavLink activeClassName="active-class" exact to="/">Home</NavLink>
            <NavLink activeClassName="active-class" exact  to="/service">Service</NavLink>
            <NavLink activeClassName="active-class" exact to="/about">About</NavLink>
            <NavLink  activeClassName="active-class" exact to="/contact">Contact</NavLink>
 </Nav>
       </Navbar.Collapse>
       <Navbar.Brand className="ml-auto email" to="#">abhishekkushwah827@gmail.com</Navbar.Brand>
      </Navbar>
    </>
  );
}

export default Navbar2;
