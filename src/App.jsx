import './App.css'
import { Outlet, Link } from "react-router-dom";
import logoAAC from './assets/AAC_Logo.svg'
import { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretRight, faCoffee } from '@fortawesome/free-solid-svg-icons'

let i = 0
let isShowBackground = true
let isUpBackground = true

function getStyle(){
  let opacity = "0.01"
  if(isShowBackground) opacity = "0.5"
  let top = "20px"
  if(isUpBackground) top = "0"
  return {opacity: opacity, top: top}
}

function App(props) {

  const [style, setStyle] = useState(getStyle())

  function backgroundSwitchOpacity(){
    isShowBackground = !isShowBackground
    setStyle(getStyle())
  }

  function backgroundSwitchTop(){
    isUpBackground = !isUpBackground
    setStyle(getStyle())
  }

  useEffect(() => {
    i++
    console.log("App useEffect", i, props.empty)
  },[props.empty])

  return (
    <div className="app">

      <header>
        <img src={logoAAC} />
        <menu>
          <Link to="/">Product</Link>
          <Link to="/">Company</Link>
          <Link to="/">Contacts us</Link>
        </menu>
        <div className='upper-right'>
          <button className='border'><span>Sign in</span><FontAwesomeIcon icon={faCaretRight} /></button>
          <button>EN <FontAwesomeIcon icon={faCaretDown} /></button>
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
        <button onClick={backgroundSwitchOpacity}>background show/hide</button>
        <button onClick={backgroundSwitchTop}>background up/down</button>
      </div>

      <div>
        <hr />
        <Outlet />
        <hr />
      </div>
      <div className='original' style={style}>original</div>
    </div>
  )
}

export default App
