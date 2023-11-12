import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Categories from './Categories'
import Favorite from './Favorite'
import Bag from './Bag'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './Home'
import App from '../App'
import { createContext, useEffect, useState } from 'react'
export const appcontext=createContext({})

function ManageRoute() {
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

  return (
    <>
    <appcontext.Provider value={{
      darkMode:darkMode,
      activeDarkMode:activeDarkMode,
      Data:data,
      panier:panier,
      actionBag:addToBag,
      deleteOrder:deleteOrder
    }} >
    <BrowserRouter>
    <div className="d-flex ">
    <App/>
    <div className={`main shadow rounded m-2 `} style={{backgroundColor:activeDarkMode&&'#2d3441'}} >
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