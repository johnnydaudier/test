import { NavLink } from "react-router-dom";
import CartIconComponent from "./CartIconComponent";
import PepeIcon from "./PepeIcon";



 
function NavBar () {
    return (
        
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
       
      <NavLink to='/'>        
         <PepeIcon/>
      </NavLink>
      <NavLink to='/'>
        <span>
          PepeShop
        </span>

      </NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
          <span>
            <NavLink to='categoria/remeras'>Remeras</NavLink>
          </span>
          
          <span>
          <NavLink to='categoria/gorras'>Gorras</NavLink>
          </span>

          <span>
            <NavLink to='categoria/tazas'>Tazas</NavLink>
          </span>
          <span>
            <NavLink to='categoria/mochilas'>Mochilas</NavLink>
          </span>
          <span>
          <NavLink to='/others'>Otros</NavLink>
          </span>
          
          <span>
          <NavLink to='/account'>Mi cuenta</NavLink>
          </span>
        </ul>
        <form className="d-flex">
        
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Buscar</button>
          <span>
              <NavLink to='/cart'> 
                  {<CartIconComponent />} 
              
              </NavLink>
          </span>
          
        </form>
      </div>
    </div> 
  </nav>
        
    )
  }
  
  export default NavBar;
  