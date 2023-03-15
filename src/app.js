import React from 'react'
import {Brand, Cta, Navbar} from './components';
import {Blog, Features, Footer, Header, WhatGPT3, Possibility} from "./containers";
import './app.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>

      </div>

      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App