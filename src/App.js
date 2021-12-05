import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import Home from "./components/home";
import Contact from "./components/contact";
import About from "./components/about";
import Card from "./components/card";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/:user' component={Card} />
      </div>
    </BrowserRouter>
  );
}

export default App;
