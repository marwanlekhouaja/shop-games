import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Categories from './Categories'
import Favorite from './Favorite'
import Bag from './Bag'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './Home'
import App from '../App'
import { createContext, useState } from 'react'
export const appcontext=createContext({})

function ManageRoute() {
  const [showMenu,setMenu] =useState(false)

const actionMenu=()=>{
  setMenu(!showMenu)
  console.log(showMenu)
}

// darkmode 
const [activeDarkMode,setDarkMode]=useState(false)
const darkMode=()=>{
  setDarkMode(!activeDarkMode)  
}
if(activeDarkMode){
  document.querySelector('body').style.backgroundColor='#23272f'
  document.querySelector('body').style.color='white'
}
else{
  document.querySelector('body').style.backgroundColor='white'
  document.querySelector('body').style.color='black'

}
  return (
    <>
    <appcontext.Provider value={{
      menuButton:showMenu,actionmenu:actionMenu,darkMode:darkMode,activeDarkMode:activeDarkMode
    }} >
    <BrowserRouter>
    <div className="d-flex ">
    <App/>
    <div className={`main ${activeDarkMode&&'shadow-lg'}shadow rounded m-2 p-2 `} style={{width:showMenu&&'90%',backgroundColor:activeDarkMode&&'#2d3441',boxShadow:activeDarkMode&&' 5 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.4)'}} >
    <Routes>
        <Route path='/'element={<Home/>} ></Route>
        <Route path='/categories' element={<Categories/>}></Route>
        <Route path='/favorite' element={<Favorite/>} ></Route>
        <Route path='/bag' element={<Bag/>}></Route>
    </Routes>
    </div>
    </div>
    </BrowserRouter>
    </appcontext.Provider>
    </>
  )
}

export default ManageRoute