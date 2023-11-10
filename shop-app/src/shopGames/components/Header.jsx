import { useContext } from "react";
import { appcontext } from "./ManageRoute";

function Header() {
  const context=useContext(appcontext)
  const menu=()=>{
    context.actionmenu()
  }

  const activeDarkMode=()=>{
    context.darkMode()
  }
  return (
    <>
      <header>
        <div className="menuButton fs-3 d-flex align-items-center justify-content-between">

          <span>
            <span onClick={menu} style={{cursor:'pointer'}}  ><ion-icon name="menu-outline"></ion-icon></span>
          </span>

          <div>

            <span style={{cursor:'pointer'}} onClick={activeDarkMode} className="darkMode me-2 activeDarkMode">
              <ion-icon name={`${context.activeDarkMode?'sunny-outline':'moon-outline'}`}></ion-icon>
            </span>

            <span style={{cursor:'pointer'}} className="bag me-3">
              <ion-icon name="bag-outline"></ion-icon>
            </span>
            {/* <span className="numOrders">0</span> */}
            <span style={{cursor:'pointer'}} className="favorite" >
              <ion-icon name="heart-outline"></ion-icon>
            </span>
            {/* <span className="numFavorite">0</span> */}
          </div>

        </div>

      </header>
    </>
  );
}

export default Header;
