import { useContext } from "react";
import { appcontext } from "./ManageRoute";
import { Link } from "react-router-dom";

function Header() {
  const context=useContext(appcontext)
  const body=document.querySelector('body').style.width

  const activeDarkMode=()=>{
    context.darkMode()
  }

  const menu=()=>{
    context.menu()
  }

  

  const styleLink=`text-decoration-none ${context.activeDarkMode?'text-light':'text-dark'}`
  return (
    <>
      <header>
        {/* <div className="d-flex justify-content-start">
          <span style={{cursor:'pointer'}} onClick={menu} className="fs-3"><ion-icon name="menu-outline"></ion-icon></span>
        </div> */}
        <div className={`menuButton fs-3 ${body<=800 ?'d-flex flex-row justify-content-between':'d-flex align-items-center justify-content-between' }`}>

          <div className="menuButton m-2" style={{cursor:'pointer',opacity:body <= 800 ? '1' : '0'}}>
            <span style={{cursor:'pointer'}} onClick={menu} className="fs-3"><ion-icon name="menu-outline"></ion-icon></span>
          </div>

          <div className={`${body<=800 ?'d-flex flex-row justify-content-end align-items-center':''}`}>
            <span style={{cursor:'pointer'}} onClick={activeDarkMode} className="darkMode me-2 activeDarkMode">
              <ion-icon name={`${context.activeDarkMode?'sunny-outline':'moon-outline'}`}></ion-icon>
            </span>

            <span style={{cursor:'pointer'}} className="bagIcon me-3">
              <Link className={styleLink} to='/bag'><ion-icon name="cart-outline"></ion-icon></Link>
            </span>
            <span className="numOrders">{context.panier.length}</span>
            <span style={{cursor:'pointer'}} className="favoriteIcon " >
              <Link className={styleLink} to='/favorite' ><ion-icon name="heart-outline"></ion-icon></Link>
            </span>
            <span className="numFavorite">{context.favorite.length}</span>
          </div>

        </div>

      </header>
    </>
  );
}

export default Header;
