import { useContext } from "react";
import { appcontext } from "./ManageRoute";
import "bootstrap/dist/css/bootstrap.css";
import {motion} from 'framer-motion'


function Bag() {
  // get the product from panier from context api
  const context = useContext(appcontext);

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
      </div>
    </>
  );
}

export default Bag;
