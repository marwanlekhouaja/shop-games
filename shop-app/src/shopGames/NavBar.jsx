import { NavLink } from "react-router-dom"
import { useContext } from "react";
import { appcontext } from "./components/ManageRoute";
function NavBar() {
    // links that show in side menu
    const context=useContext(appcontext)
   const navLinks=[
    {id:1,link:'/',name:'Home',icon:<ion-icon name="home-outline"></ion-icon>},
    {id:2,link:'/categories',name:'Categories',icon:<ion-icon name="copy-outline"></ion-icon>},
    {id:3,link:'/favorite',name:'My favorite',icon:<ion-icon name="heart-outline"></ion-icon>},
    {id:4,link:'/bag',name:'My bag',icon:<ion-icon name="bag-outline"></ion-icon>},
   ] 

   const styleLink={
   display:context.menuButton&&'flex',
   justifyContent:context.menuButton&&'center',
   width:context.menuButton&&'50%',
   alignItems:context.menuButton&&'center',
   margin:context.menuButton&&'auto',
   color:context.activeDarkMode?'white':'black'
   }

   const styleNav=
    {display:context.menuButton&&'flex',
    flexDirection:context.menuButton&&'column',
    justifyContent:context.menuButton&&'center',
    margin:context.menuButton&&'auto'
   }


  return (
    <>
    <nav style={styleNav}>
        {navLinks.map((nav)=>(
            <div key={nav.id} className="">
                <NavLink  className={`linkMenu ${context.menuButton&&'fs-5 mt-3 mb-3'} d-flex align-items-center m-auto mt-3 mb-3`} style={styleLink} to={nav.link} >
                    <span className={`mt-1 ${context.menuButton?'':'me-3'} `} >{nav.icon}</span>
                    <span style={{display:context.menuButton?'none':'block'}}>{nav.name}</span>
                </NavLink>
            </div>
        ))}       
    </nav>
    </>
  )
}

export default NavBar