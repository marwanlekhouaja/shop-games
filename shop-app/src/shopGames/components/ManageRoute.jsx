import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Categories from './Categories'
import Favorite from './Favorite'
import Bag from './Bag'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './mainPage/Home'
import { createContext, useEffect, useState } from 'react'
import SideMenu from '../SideMenu'
export const appcontext=createContext({})

function ManageRoute() {
// darkmode 
const [body, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 


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
// get the data from api 
const [data,setData]=useState([])

const fetchData=()=>{
  fetch('http://localhost:5173/api/data.json')
  .then(res=>res.json())
  .then(games=>setData(games))
  .catch(e=>console.log(e.message))
}
 useEffect(()=>{
  fetchData()
 },[])

 // partie panier

 const [panier,setPanier]=useState([])

 const addToBag=(product)=>{
  setPanier(prev=>[...prev,product])
 } 

 // delete order

 const deleteOrder=(newProducts)=>{
  setPanier(newProducts)  
 }

 // add to favorite
 const [favorite,setFavorite] = useState([])
  const addToFavorite=(order)=>{
    setFavorite(prev=>[...prev,order])
  }

  const deletToFavorite=(order)=>{
    setFavorite(order)
  }


 // partie menu 


 // tous les fonctions et data qui utlise sur le context api

 const globalData={
      darkMode:darkMode,
      activeDarkMode:activeDarkMode,
      Data:data,
      panier:panier,
      actionBag:addToBag,
      deleteOrder:deleteOrder,
      addToFavorite:addToFavorite,
      favorite:favorite,
      deleteToFavorite:deletToFavorite,
      bodyWidth:body
 }


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 
  return (
    <>
    <appcontext.Provider value={ globalData } >
    <BrowserRouter>
    
    <div className="d-flex ">
    {/* <ion-icon name="menu-outline"></ion-icon> */}
    <SideMenu/>
    <div className={`main shadow rounded m-2 `} style={{backgroundColor:activeDarkMode&&'#2d3441',height:'100%',width:body>800?'80%':'100%'}} >
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