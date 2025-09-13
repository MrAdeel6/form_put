import React from 'react';
import '../assets/styles/Card.css';
import Car1 from '../assets/images/1749138265605-Cadillac CT4 2024 Exterior.png';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Cards = ({ onBook, data }) => {
  return (
    <div className="card-wrapper" >
      <div className="card-class" >
        <div className="info-main" > {/* this start */}
          <div className="card-car-img-class" >
            <div className="card-car-img-main" >
              <img className="img-car" src={Car1} />
            </div>
          </div>
          <div className="card-car-details-class">
            <div className="card-car-details-main" >
              <div className="car-details" >
                <span>{data.carName}</span>
                <span>description Car</span>
                <div className="opt-main" >
                  <div className="opt-section1" >
                    
                  </div>
                  <div className="opt-section2" >

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-right-class" >
        <div className="card-car-prize-class" >
          <div className="card-car-prize-main" >
            <div className="card-car-prize" >
              <span className="rl-prize cross-prize">$1999.40</span> {/* when display then discount availble */}
              <span className="ds-prize" >$999.20</span> { /* real dis prize */}
              <div className="include-main" >
                <CheckCircleOutlineIcon className="check-icon" />
                <span>includes tax and all of all</span>
              </div>
            </div>
          </div>
        </div>
        <div className="button-book-now-class">
          <div className="button-book-now-main">
            <button onClick={()=>{
              onBook &&
              onBook();
            }}>Book Now</button>
          </div>
        </div>
         </div>
      </div>
    </div>
  )
}

export default Cards;