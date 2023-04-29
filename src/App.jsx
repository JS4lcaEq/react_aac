import './App.css'
import { Outlet, Link } from "react-router-dom";
import logoAAC from './assets/AAC_Logo.svg'
import { useState, useEffect } from 'react'
let i = 0
function App(props) {
  useEffect(() => {
    i++
    console.log("App useEffect", i, props.empty)
  },[props.empty])
  return (
    <div className="app">
      <div className='original'>original</div>
      <header>
        <img src={logoAAC} />
        <menu>
          <Link to="/">Product</Link>
          <Link to="/">Product</Link>
          <Link to="/">Product</Link>
        </menu>
        <div className='upper-right'>
          EN
        </div>
      </header>

      <h1>App</h1>
      <div className='main-menu'>
        <Link to="/carousel">carousel</Link>
        <Link to="/carouselmaket">carousel maket</Link>
        <Link to="page">page</Link>
        <Link to="/">root</Link>
        <Link to="slice">slice</Link>
        <Link to="test">test</Link>
        <Link to="carousel-view">Carousel</Link>
        <Link to="big-carousel-view">Big Carousel</Link>
      </div>

      <div>
        <hr />
        <Outlet />
        <hr />
      </div>

    </div>
  )
}

export default App
