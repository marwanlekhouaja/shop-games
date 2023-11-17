import { useContext} from "react"
import { appcontext } from "./ManageRoute"
import {motion} from 'framer-motion'

function GamesCard() {
  const context=useContext(appcontext)  
  
  // const [activeHeart,setActiveHeart]=useState(false)
  const data=context.Data
  // const [test,setTest]=useState(data)
  // const makeHeart=(id)=>{
  //   const newValues=test.map((t)=>
  //   t.id === id ? {...t,heart:!t.heart} : t
  //   )  
  //   setTest(newValues)          
  // }

  //add a product to the bag
  
  const addProduct=(product)=>{
    let newProduct={...product}
    newProduct={...newProduct,idGame:Date.now()}
    context.actionBag(newProduct)
    // console.log(newProduct)
    alert('the product add succefully to your bag !')
  }
  
 
  return (
    <div className="gamescard">
    <motion.div initial={{y:'200vh'}} animate={{y:0}} transition={{duration:1.1}} style={{flexWrap:'wrap',width:'100%',display:'flex',justifyContent:'space-evenly'}}>
        {data.slice(0,8).map((game)=>(
            <div className="item shadow-lg p-1  me-2 mb-3 mt-3 rounded-4 flex-column d-flex" key={game.id}>
                <img className="img_card" src={game.img} style={{borderRadius:'1rem'}} alt="" />
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
                    <button title="add to your bag" className="add fs-3" style={{background:'none',border:'none',color:context.activeDarkMode&&'white'}}  >
                      <ion-icon name="cart-outline" onClick={()=>addProduct(game)}></ion-icon>
                    </button>
                    
                </div>
            </div>
        ))}
        
    </motion.div>
    </div>
  )
}

export default GamesCard