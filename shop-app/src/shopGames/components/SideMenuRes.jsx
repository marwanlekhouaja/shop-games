// import React from 'react'
import { useContext } from 'react'
import NavBar from '../NavBar'
import { appcontext } from './ManageRoute'
function SideMenuRes() {
  // components of side menu when the screen of the page is < 800 this componenet will show as a navbar
  const context=useContext(appcontext)  

  return (
    <>
    <div className="offcanvas offcanvas-start shadow-lg" style={{color:context.activeDarkMode?'white':'black',backgroundColor:context.activeDarkMode?'#2d3441':'white'}} data-bs-scroll="true" data-bs-backdrop="false"  id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header">
           <button type="button" className={`btn-close ${context.activeDarkMode&&'text-light bg-white'} `} data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div>
        <div className="fs-3 text-center d-flex justify-content-center align-items-center m-auto">
          <ion-icon name="game-controller-outline"></ion-icon>
          <h5 className='text-center ms-3 mt-1 fs-3'>Shop games</h5> 
        </div>
        
        <div className="listLinks w-75 m-auto text-center">
        <NavBar/>
        </div>
        </div>
        </div>
    </>
  )
}

export default SideMenuRes