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
      <Link to="/carousel">carousel</Link> | 
      <Link to="/carouselmaket">carousel maket</Link> | 
      <Link to="page">page</Link> | 
      <Link to="/">root</Link> | 
      <Link to="slice">slice</Link>
      <div>
        <hr />
        <Outlet />
        <hr />
      </div>


    </div>
  )
}

export default App
