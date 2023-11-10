import { useContext } from 'react';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import '../style/section.css'; // Make sure to import your custom styles
import { appcontext } from './ManageRoute';
import GamesCard from './GamesCard';

function Section() {
  const context = useContext(appcontext);

  return (
    <>
      <div className="section">
       <div className="game">
       <div id="carouselExampleIndicators" className="carouselParent carousel slide " data-bs-ride="carousel" data-bs-wrap="true">
        <div className="carousel-indicators">
          {context.Data.map((data, index) => (
            <button
              key={index}
              type="button"
              style={{display:'none'}}
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner shadow-lg">
          {context.Data.map((data, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''} rounded shadow-lg `}>
              <img src={data.img} style={{maxHeight:'280px'}} className="img_carousel d-block w-100 rounded" alt={`Slide ${index + 1}`} />
              <h2>{data.title}</h2>  
              <p>{data.description}</p>  
              <div className="button order_now ">
                <a href='#' >Order now !</a>
              </div>
              
            </div>
          ))}
        </div>

        <button className="carousel-control-prev mb-5" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon p-4 mb-3 " aria-hidden="true"></span>
        </button>

        <button className="carousel-control-next mb-5" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon p-4 mb-3 " aria-hidden="true" style={{ fontWeight: 'bold' }}></span>
        </button>
      </div> 
     </div>         
      
      </div>
      <div className='games_card'>
        <h2 style={{fontFamily:'monospace',marginTop:'7px'}}>games available</h2>
        <GamesCard/>
      </div>
    </>
  );
}

export default Section;
