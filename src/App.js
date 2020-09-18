import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "./Home"
import { Switch, Route, Redirect } from 'react-router-dom';
import About from "./About"
import Service from "./Service"
import Contact from "./Contact"
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2"
import './index.css';


function App() {



  
  return (
<>
    <Navbar2/>
    <Switch>
     <Route exact path="/gh-pages-url" component={Home} />
     <Route exact path="/gh-pages-url/about" component={About} />
     <Route exact path="/gh-pages-url/service" component={Service} />
     <Route exact path="/gh-pages-url/contact" component={Contact} />
     <Redirect to="abhishekkushwah827.github.io/" />
     <Home/>
     </Switch>
</>
 );
} 

export default App;
