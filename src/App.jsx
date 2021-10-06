import React from 'react';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Coverpage from './components/coverpage/Coverpage';
import Contact from './components/contact/Contact';
import './app.scss';
import { useState } from "react";
// import Menu from './components/menu/Menu'
import { ParallaxProvider } from 'react-scroll-parallax'

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <ParallaxProvider>
      <div className ="app" >
          <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          {/* <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> */}
        <div className="sections">
          <Coverpage className="coverpage"/>
          <Intro className="intro"/>
          <Portfolio className="portfolio"/>
          <Works className="works"/>
          <Contact className="contact"/>
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default App;
