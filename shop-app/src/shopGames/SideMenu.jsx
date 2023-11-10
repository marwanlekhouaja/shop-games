import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./NavBar";
import { useContext } from "react";
import { appcontext } from "./components/ManageRoute";
import {NavLink } from "react-router-dom";
function SideMenu() {
  const context=useContext(appcontext)
  const classParentDiv=`slideMenu shadow rounded m-2 p-2`
  const styleParentDiv={backgroundColor:context.activeDarkMode&&'#2d3441'}
  const styleLogo={
                  textAlign:'center',textDecoration:'none',
                  color:context.activeDarkMode?'white':'black',
                  display:'flex',alignItems:'center',
                 justifyContent:'center'
                  }

  return (
    <div style={styleParentDiv} className={classParentDiv}>
      <NavLink to='/' style={styleLogo} className="logo ">
        <div className="me-1 fs-3">
          <ion-icon name="game-controller-outline"></ion-icon>
        </div>
        <h5 >Shop games</h5>
      </NavLink>
      <NavBar />
      
    </div>
  );
}

export default SideMenu;
