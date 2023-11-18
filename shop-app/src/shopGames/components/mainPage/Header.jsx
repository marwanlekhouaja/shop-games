import { useContext } from "react";
import { appcontext } from "../ManageRoute";
import { Link } from "react-router-dom";
import SideMenuRes from "../SideMenuRes";
import SideCart from "../cart/sideCart";
import 'bootstrap/dist/js/bootstrap'

function Header() {
  const context=useContext(appcontext)
  
  const activeDarkMode=()=>{
    context.darkMode()
  }

  const styleLink=`text-decoration-none ${context.activeDarkMode?'text-light':'text-dark'}`
  return (
    <>
      <header>
        
        <SideMenuRes/>
        <div className={`menuButton fs-3 ${context.bodyWidth<=800 ?'d-flex flex-row justify-content-between':'d-flex align-items-center justify-content-between' }`}>

          <div className="menuButton m-2" style={{cursor:'pointer'}}>
            <span style={{cursor:'pointer',display:context.bodyWidth<800?'block':'none'}}  data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" className="fs-3"><ion-icon name="menu-outline"></ion-icon></span>
          </div>

          <div className={`${context.bodyWidth<=800 ?'d-flex flex-row justify-content-end align-items-center':''}`}>
            <span style={{cursor:'pointer'}} onClick={activeDarkMode} className="darkMode me-2 activeDarkMode">
              <ion-icon name={`${context.activeDarkMode?'sunny-outline':'moon-outline'}`}></ion-icon>
            </span>

           
            <span style={{cursor:'pointer'}} className="bagIcon me-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling2" aria-controls="offcanvasScrolling">
            <SideCart/>
              <ion-icon name="cart-outline"></ion-icon>
            </span>
            <span className="numOrders">{context.panier.length}</span>
            <span style={{cursor:'pointer'}} className="favoriteIcon " >
              <Link className={styleLink} to='/favorite'><ion-icon name="heart-outline"></ion-icon></Link>
            </span>
            <span className="numFavorite">{context.favorite.length}</span>
          </div>

        </div>

      </header>
    </>
  );
}

export default Header;
