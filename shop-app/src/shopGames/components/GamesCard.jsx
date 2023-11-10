import { useContext, useState } from "react"
import { appcontext } from "./ManageRoute"

function GamesCard() {
  const context=useContext(appcontext)  
  
  const [activeHeart,setActiveHeart]=useState(false)
  const makeHeart=()=>{
    setActiveHeart(!activeHeart)
  }
  
 
  return (
    <div className="" style={{flexWrap:'wrap',width:'100%',display:'flex',justifyContent:'space-evenly'}}>
        {context.Data.map((game)=>(
            <div className=" shadow-lg p-1  me-2 mb-3 mt-3 rounded-4 flex-column d-flex" key={game.id}>
                <img className="img_card" src={game.img} style={{borderRadius:'1rem',width:'220px',height:'150px'}} alt="" />
                <span style={{fontFamily:'monospace',textAlign:'center',marginTop:'7px'}}>{game.title}</span>
                <span className="text-center ">{game.rating==3 ? '⭐⭐⭐' : game.rating==4 ? '⭐⭐⭐⭐' :game.rating&& '⭐⭐⭐⭐⭐' }</span>
                <span>
                  {game.discount !=0 ?
                  <div className="d-flex justify-content-between  align-items-center mt-2">
                    <span className="discount">{game.discount * 100}%</span>
                    <span className="oldPrice" >{game.price} $</span>
                    <span className="currentPrice">{game.discount*game.price} $</span>
                  </div>
                  : <span className="currentPrice d-flex justify-content-center mt-2">{game.price} $</span> }
                </span>
                <div className="featured">
                    <button title="add to your bag" className="add fs-3" style={{background:'none',border:'none',color:context.activeDarkMode&&'white'}}  ><ion-icon name="cart-outline"></ion-icon></button>
                    <button title='add product to your favorite' className={`heart fs-3 ${activeHeart&&'text-danger'}`} style={{background:'none',border:'none',color:context.activeDarkMode&&'white'}}  onClick={makeHeart} ><ion-icon name={`${activeHeart?'heart':'heart-outline'}`}></ion-icon></button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default GamesCard