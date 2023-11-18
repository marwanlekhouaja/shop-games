import { useContext } from "react";
import { appcontext } from "../ManageRoute";
import { MdDeleteForever } from "react-icons/md";
import {motion} from 'framer-motion' 
function SideCart() {
  const context=useContext(appcontext) 
  
  const removeOrder=(id)=>{
    const confirm=window.confirm('do you really want to remove this order !')
    if(confirm){
        const newOrder=context.panier.filter((order)=>order.idGame !== id)
        context.deleteOrder(newOrder)
    }
  }
  return (
    <>
      
      <div
        className="offcanvas offcanvas-end shadow-lg"
        style={{color:context.activeDarkMode?'white':'black',backgroundColor:context.activeDarkMode?'#2d3441':'white'}}
        data-bs-scroll="true"
        data-bs-backdrop="false"
        id="offcanvasScrolling2"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title fs-5" style={{fontFamily:'monospace'}} id="offcanvasScrollingLabel">
            Your orders
          </h5>
          <button
            type="button"
            className={`btn-close ${context.activeDarkMode&&'text-light bg-white'} fs-5`}
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <motion.div className="offcanvas-body" initial={{y:'100vh'}} animate={{y:0}} transition={{delay:.3,duration:2}}>
          {context.panier.length !== 0 ? 
          context.panier.map((order)=>(
            <div key={order.idGame}>
             <div className="d-flex m-2 align-items-center justify-content-between flex-row" >
                <div>
                    <img src={order.img} style={{width:'100px',height:'100px',borderRadius:'10px'}} alt="" />
                </div>
               <div>
                <h5 style={{fontSize:'1rem',fontFamily:'monospace'}}>{order.title}</h5>
                <div style={{color:'chocolate',fontSize:'1rem'}}>{order.discount!=0 ? <span>{(order.discount*order.price).toFixed(1)} $</span> : <span>{order.price} $</span> }</div>
               </div>
               <div className="actionDelete">
                <button className="btn btn-danger text-light" onClick={()=>removeOrder(order.idGame)}><MdDeleteForever /></button>
               </div>               
            </div>
            <hr />
            </div>

          ))
           : <span style={{fontSize:'14px',fontFamily:'monospace'}}>no orders in the right now</span>}
        </motion.div>
      </div>
    </>
  );
}

export default SideCart;
