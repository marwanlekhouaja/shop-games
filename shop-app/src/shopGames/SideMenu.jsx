import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./NavBar";
import { useContext } from "react";
import { appcontext } from "./components/ManageRoute";
function SideMenu() {
  const context=useContext(appcontext)
  console.log(context.menuButton)
  return (
    <div style={{width:context.menuButton?'10%':'20%',backgroundColor:context.activeDarkMode&&'#2d3441'}} className={`slideMenu shadow rounded m-2 p-2 ${context.menuButton&&'animation'}`}>
      <div style={{display:context.menuButton?'flex':'block',justifyContent:'center',alignItems:'center',textAlign:'center'}} className="logo ">
        <div className="mb-1 fs-3">
          <ion-icon name="game-controller-outline"></ion-icon>
        </div>
        <h4 style={{display:context.menuButton&&'none'}} >Shop games</h4>
      </div>
      <NavBar />
      
    </div>
  );
}

export default SideMenu;
