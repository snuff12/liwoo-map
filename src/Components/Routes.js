import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Map from "../Screens/Map.js";
import Footer from './Footer.js';
import LIWOOInfo from "../Screens/LIWOOInfo.js";
import LIWOOYoutube from "../Screens/LIWOOYoutube.js";
import Main from "../Screens/Main.js";

export default () => (
  <Router basename ={process.env.PUBLIC_URL}>
    <Footer/>
    <Route path="/" component={Main}/>
    <Route path="/map" component={Map} />
    <Route path="/liwoo" component ={LIWOOInfo}/>
    <Route path="/youtube" component ={LIWOOYoutube}/>
  </Router>
)