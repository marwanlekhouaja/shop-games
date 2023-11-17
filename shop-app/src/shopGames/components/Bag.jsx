import { useContext } from "react";
import { appcontext } from "./ManageRoute";
import "bootstrap/dist/css/bootstrap.css";
import {motion} from 'framer-motion'
import SideMenuRes from "./SideMenuRes";

function Bag() {
  // get the product from panier from context api
  const context = useContext(appcontext);

  // calcul total price
  let totalPrice=0

  for(let i=0;i<context.panier.length;i++){
    if(context.panier[i].discount !==0){
      parseFloat(totalPrice+=context.panier[i].discount*context.panier[i].price)
      
    }
    else{
      parseFloat(totalPrice+=context.panier[i].price )
    }
  }

 

  //remove product
  const removeProduct=(id)=>{
   const confirm=window.confirm('are you sure you want to remove this order !')
   if(confirm){
    const filter=context.panier.filter((game)=>game.id != id)
    context.deleteOrder(filter)
   }
  }

 
  return (
    <>
      <div className="bag">
      <SideMenuRes/>
      <div className="d-flex justify-content-start">
         <span style={{cursor:'pointer',display:context.bodyWidth<800?'block':'none'}}  data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" className="fs-3"><ion-icon name="menu-outline"></ion-icon></span>

      </div>
        <motion.table  initial={{x:'100vh'}} animate={{x:0}} transition={{duration:1.1}} className="container rounded mt-3 shadow table table-light text-center">
          <thead>
            <tr>
              <th>title</th>
              <th>image</th>
              <th>price</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            
            {context.panier.length !== 0 ? (
              context.panier.map((game) => (
                <tr key={game.idGame}>
                  <td>{game.title}</td>
                  <td>
                    <img
                      style={{ width: "100px", height: "100px" }}
                      src={game.img}
                      alt=""
                    />
                  </td>
                  <td>{game.discount!=0 ? <span>{(game.discount*game.price).toFixed(1)} $</span> : <span>{game.price} $</span> }</td>
                  <td>
                    <button className="btn btn-danger" onClick={()=>removeProduct(game.id)} >delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7}>no products in the right now !</td>
              </tr>
            )}
          </tbody>
        </motion.table>
        <span className="text-end d-flex justify-content-end">Total price : {totalPrice.toFixed(2)} $</span>
      </div>
    </>
  );
}

export default Bag;
