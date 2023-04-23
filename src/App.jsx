import './App.css'
import { Outlet, Link } from "react-router-dom";
import logoAAC from './assets/AAC_Logo.svg'
function App() {

  return (
    <div className="App">
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
      <Link to="/carousel">carousel</Link> &nbsp; 
      <Link to="/carouselmaket">carousel maket</Link> &nbsp; 
      <Link to="page">page</Link> &nbsp;  
      <Link to="/">root</Link> &nbsp;  
      <Link to="slice">slice</Link> &nbsp; 
      <Link to="test">test</Link> &nbsp; 
      <Link to="carousel-view">Carousel</Link>
      <div>
        <hr />
        <Outlet />
        <hr />
      </div>


    </div>
  )
}

export default App
