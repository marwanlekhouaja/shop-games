import { useContext } from "react"
import {NavLink } from "react-router-dom"
import { appcontext } from "./components/ManageRoute"

function NavBar() {
   const context=useContext(appcontext) 
   const navLinks=[
    {id:1,link:'/',name:'Home',icon:<ion-icon name="home-outline"></ion-icon>},
    {id:2,link:'/categories',name:'Categories',icon:<ion-icon name="copy-outline"></ion-icon>},
    {id:3,link:'/favorite',name:'My favorite',icon:<ion-icon name="heart-outline"></ion-icon>},
    {id:4,link:'/bag',name:'My bag',icon:<ion-icon name="bag-outline"></ion-icon>},
   ] 
   

   const stylelinkIcon = `mt-1 linkIcon `;

  return (
    <>
    <nav>
        {navLinks.map((nav)=>(
            <div key={nav.id} >
                <NavLink  className={`linkMenu d-flex align-items-center m-auto mt-3 mb-3 `} style={{color:context.activeDarkMode?'white':'black'}}  to={nav.link} >
                    <span className={stylelinkIcon} >{nav.icon}</span>
                    <span className="linkName" >{nav.name}</span>
                </NavLink>
            </div>
        ))}       
    </nav>
    </>
  )
}

export default NavBar