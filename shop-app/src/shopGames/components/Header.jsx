import { useContext } from "react";
import { appcontext } from "./ManageRoute";
import { Link } from "react-router-dom";

function Header() {
  const context=useContext(appcontext)

  const activeDarkMode=()=>{
    context.darkMode()
  }

  const styleLink=`text-decoration-none ${context.activeDarkMode?'text-light':'text-dark'}`
  return (
    <>
      <header>
        <div className="menuButton fs-3 d-flex align-items-center justify-content-end">

          <div>

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
            <span className="numFavorite">0</span>
          </div>

        </div>

      </header>
    </>
  );
}

export default Header;
