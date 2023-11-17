import { useContext} from "react";
import { appcontext } from "./ManageRoute";
import {motion} from 'framer-motion'
import SideMenuRes from "./SideMenuRes";



function Favorite() {
  const context = useContext(appcontext);
  const data = context.favorite;

  const makeHeart=(game)=>{
   
    const order=data.filter((d)=> d.idGame !== game.idGame)

    context.deleteToFavorite(order)
  }
   
  return (
    <>
      <SideMenuRes/>
      <div className="d-flex justify-content-start">
         <span style={{cursor:'pointer',display:context.bodyWidth<800?'block':'none'}} data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" className="fs-3">
          <ion-icon name="menu-outline"></ion-icon>
         </span>

      </div>
      <motion.div
        initial={{y:'200vh'}}
        animate={{y:0}}
        transition={{duration:1.1}}
        className="favorite"
        style={{
          flexWrap: "wrap",
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {data.length !== 0 ? (
          data.map((game) => (
            <div
              className=" shadow-lg p-1  m-2 rounded-4 flex-column d-flex"
              key={game.idGame}
              style={{maxHeight:'300px'}}
            >
              <img
                className="img_card"
                src={game.img}
                style={{
                  borderRadius: "1rem",
                  width: "220px",
                  height: "150px",
                }}
                alt=""
              />

              <span
                style={{
                  fontFamily: "monospace",
                  textAlign: "center",
                  marginTop: "7px",
                }}
              >
                {game.title}
              </span>

              <span className="text-center ">
                {game.rating == 3
                  ? "⭐⭐⭐"
                  : game.rating == 4
                  ? "⭐⭐⭐⭐"
                  : game.rating && "⭐⭐⭐⭐⭐"}
              </span>

              <span>
                {game.discount != 0 ? (
                  <div className="d-flex justify-content-between  align-items-center mt-2">
                    <span className="discount">{game.discount * 100}%</span>
                    <span className="oldPrice">{game.price} $</span>
                    <span className="currentPrice">
                      {(game.discount * game.price).toFixed(1)} $
                    </span>
                  </div>
                ) : (
                  <span className="currentPrice d-flex justify-content-center mt-2">
                    {game.price} $
                  </span>
                )}
              </span>

              <div className="featured">
        <button title='add product to your favorite' className={`heart fs-3 ${game.heart?'text-danger':'text-dark'}`} style={{background:'none',border:'none',color:context.activeDarkMode&&'white'}}  onClick={()=>makeHeart(game)} ><ion-icon name={`${game.heart?'heart':'heart-outline'}`}></ion-icon></button>
    </div>
            </div>
          ))
        ) : (
          <span className="notfoundText">no favorite game in the right now !</span>
        )}
      </motion.div>
    </>
  );
}

export default Favorite;
