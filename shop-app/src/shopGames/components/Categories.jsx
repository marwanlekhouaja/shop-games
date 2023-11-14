import { useContext, useEffect, useRef, useState} from "react"
import { appcontext } from "./ManageRoute"
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'



function Categories() {
  const body=document.querySelector('body').style.width
  const [feature,setFeature]=useState([
    {id:1,name:'All',active:true},
    {id:2,name:'RPG',active:false},
    {id:3,name:'MOBA',active:false},
    {id:4,name:'Battle',active:false},
    {id:5,name:'Racing',active:false},
    {id:6,name:'Fighting',active:false}
  ])

 
  const context = useContext(appcontext);
  // get data of games from contextapi 
  let backup = context.Data;
  const [filteredData,setFilterData]=useState(backup)

  const filterGames=(categorie)=>{
    const updateFeature=feature.map((f)=>
     f.name === categorie ? {...f,active:true} : {...f,active:false}
    )
    setFeature(updateFeature)
    
    if(categorie === 'All'){
      setFilterData(backup)
    }    
    else{
      const filterProduct=backup.filter((game) => game.category === categorie )
      setFilterData(filterProduct)
    }
  }
   const refSearch=useRef()

   useEffect(()=>{
    setFilterData(backup)
   },[backup])

   const search=()=>{
    const searchValue=refSearch.current.value.toLowerCase()
    if(searchValue.length !==0 ){
      const filterSearch=backup.filter((game)=> game.title.toLowerCase().includes(searchValue) )
      setFilterData(filterSearch)
    }
    else{
      setFilterData(backup)
    }
   }

   const makeHeart = (game) => {
     const updatedData = filteredData.map((r) =>
       r.id === game.id ? { ...r, heart: !r.heart } : r,
       
     );
     setFilterData(updatedData);
    //  console.log(filterData)
     let data={...game}
     data={...game,idGame:Date.now(),heart:true}
     context.addToFavorite(data)      
 
   };
   
  
   
 

  //add a product to the bag
  
  const addProduct=(product)=>{
    let newProduct={...product}
    newProduct={...newProduct,idGame:Date.now()}
    context.actionBag(newProduct)
    // console.log(newProduct)
    alert('the product add succefully to your bag !')
  }

  const styleLink=`text-decoration-none ${context.activeDarkMode?'text-light':'text-dark'}`

  const activeDarkMode=()=>{
    context.darkMode()
  }
 

  return (
    <div className="categorie container-fluid">
      <header>
        <div className={`menuButton fs-3 d-flex align-items-center justify-content-end`}>

            <span style={{cursor:'pointer'}} onClick={activeDarkMode} className="darkMode me-2 mt-1 activeDarkMode">
              <ion-icon name={`${context.activeDarkMode?'sunny-outline':'moon-outline'}`}></ion-icon>
            </span>

            <span style={{cursor:'pointer'}} className="bagIcon me-3">
              <Link className={styleLink} to='/bag'><ion-icon name="cart-outline"></ion-icon></Link>
            </span>
            <span className="numOrders">{context.panier.length}</span>
            <span style={{cursor:'pointer'}} className="favoriteIcon " >
              <Link className={styleLink} to='/favorite' ><ion-icon name="heart-outline"></ion-icon></Link>
            </span>
            <span className="numFavorite">{context.favorite.length}</span>
          </div>

      </header>

      <div className="container row d-flex align-items-center justify-content-between">
        <div className="col-lg-9">
          <div style={{gap:body<=800 ? '20px' : ''}} className={`filters ${body<=800 ? 'd-flex justify-content-center' : ''}`}>
            {feature.map((f)=>(
              <div key={f.id} > 
                 <span onClick={()=>filterGames(f.name)} className={`${f.active?'activeCategorie':''} feature`}>{f.name}</span>              
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-3 search ">
          <input type="search" placeholder="search games ..." className="shadow-lg search_bar form-control border-primary" ref={refSearch} />    
          <button onClick={search} className="searchButton"><ion-icon name="search-outline"></ion-icon></button>      
        </div>
      </div>

      {/* games */}

      <motion.div initial={{y:'200vh'}} animate={{y:0}} transition={{duration:1.1}} className="" style={{flexWrap:'wrap',width:'100%',display:'flex',justifyContent:'space-evenly'}}>

        {filteredData.length!==0?filteredData.map((game)=>(

            <div className=" shadow-lg p-1  me-2 mb-3 mt-3 rounded-4 flex-column d-flex" key={game.id}>

                <img className="img_card" src={game.img} style={{borderRadius:'1rem',width:'220px',height:'150px'}} alt="" />

                <span style={{fontFamily:'monospace',textAlign:'center',marginTop:'7px'}}>{game.title}</span>

                <span className="text-center ">{game.rating==3 ? '⭐⭐⭐' : game.rating==4 ? '⭐⭐⭐⭐' :game.rating&& '⭐⭐⭐⭐⭐' }</span>

                <span>
                  {game.discount !=0 ?
                  <div className="d-flex justify-content-between  align-items-center mt-2">
                    <span className="discount">{game.discount * 100}%</span>
                    <span className="oldPrice" >{game.price} $</span>
                    <span className="currentPrice">{(game.discount*game.price).toFixed(1)} $</span>
                  </div>
                  : <span className="currentPrice d-flex justify-content-center mt-2">{game.price} $</span> }
                </span>

                <div className="featured">
                    <button title="add to your bag" className="add fs-3" style={{background:'none',border:'none',color:context.activeDarkMode&&'white'}}  ><ion-icon name="cart-outline" onClick={()=>addProduct(game)}></ion-icon></button>
                    <button title='add product to your favorite' className={`heart fs-3 ${game.heart?'text-danger':'text-dark'}`} style={{background:'none',border:'none',color:context.activeDarkMode&&'white'}}
                      onClick={context.favorite.includes(game) ? 
                         ()=> context.deletToFavorite(game) :  ()=>makeHeart(game)} >
                        <ion-icon name={`${game.heart?'heart':'heart-outline'}`}></ion-icon>
                    </button>
                </div>
            </div>
        )) : <span className="notfoundText">item not found !</span>  }
        
    </motion.div>


    </div>
  )
 
}

export default Categories