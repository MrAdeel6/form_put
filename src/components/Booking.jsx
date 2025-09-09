import React from 'react';
import TopNav from '../components/small_componets/TopNav.jsx';
import '../assets/styles/Booking.css';
import Map from '../components/Map.jsx';
import SocialDistanceIcon from '@mui/icons-material/SocialDistance';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RoomSharpIcon from '@mui/icons-material/RoomSharp';
import DateRangeSharpIcon from '@mui/icons-material/DateRangeSharp';
import Cards from '../components/Card.tsx';
import BottomNav from '../components/small_componets/BottomNav.tsx';


const Booking = () => {
  
  
  const dammyData = [
    { carName: 'Car Name', carImg: '../assets/images/', carDes: '', req: {
      messger: 3,
      other: 3,
    }, options: ['icon', 'icon', 'icon', 'icon'], prize: 130, disPrize: 100, include: 'include ...' },
    { carName: 'Car Name', carImg: '../assets/images/', carDes: '', req: {
      messger: 3,
      other: 3,
    }, options: ['icon', 'icon', 'icon', 'icon'], prize: 130, disPrize: 100, include: 'include ...' },
    { carName: 'Car Name', carImg: '../assets/images/', carDes: '', req: {
      messger: 3,
      other: 3,
    }, options: ['icon', 'icon', 'icon', 'icon'], prize: 130, disPrize: 100, include: 'include ...' },
    { carName: 'Car Name', carImg: '../assets/images/', carDes: '', req: {
      messger: 3,
      other: 3,
    }, options: ['icon', 'icon', 'icon', 'icon'], prize: 130, disPrize: 100, include: 'include ...' },
    { carName: 'Car Name', carImg: '../assets/images/', carDes: '', req: {
      messger: 3,
      other: 3,
    }, options: ['icon', 'icon', 'icon', 'icon'], prize: 130, disPrize: 100, include: 'include ...' },
    { carName: 'Car Name', carImg: '../assets/images/', carDes: '', req: {
      messger: 3,
      other: 3,
    }, options: ['icon', 'icon', 'icon', 'icon'], prize: 130, disPrize: 100, include: 'include ...' },
  ];
  
  
  return (
  <div style={{
    position: 'relative',
  }}>
    <div style={{
      backgroundColor: 'gray',
      height: '100vh',
      overflow: 'scroll',
      position: 'relative',
    }}>
      <TopNav />
      <div class="main-work-class">
        <div className="details-class">
          <div className="map-class">
            <div className="map">
              <Map />
            </div>
            <div class="map-details">
              <div class="distance-class">
                <SocialDistanceIcon className="dis-icon" />
                <span>100km</span>
              </div>
              <div class="duration-class">
                <AccessTimeIcon className="du-icon" />
                <span>10m</span>
              </div>
            </div>
          </div>
          <div className="adress-detaill-class">
            <div className="pic-up-details-class">
              <div className="pic-up-main">
                <ArrowForwardIcon className="arrow-icon" />
                <span>Pickup Trip Details</span>
              </div>
            </div>
            <div className="loc-details-class">
              <div className="loc-details-main" >
                <div className="start-point-main" >
                  <RoomSharpIcon />             <div class="de-class">
                    <span>Your Start Point</span>
                    <des>Desciption</des>
                   </div>
                </div>
                <div className="end-point-main" >
                  <RoomSharpIcon className="mark-icon" />
                  <div class="de-class">
                    <span>Your End Point</span>
                    <des>Desciption</des>
                  </div>
                </div>
              </div>
              <div className="trip-details-class" >
                <div className="trip-details-main" >
                  <div class="date-main">
                  <DateRangeSharpIcon />
                   <span>Wen, Sep 10th, 2025</span>
                  </div>
                  <div class="time-main">
                  <AccessTimeIcon />
                   <span>12:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="books-class">
         <div className="books-main" >
           <div className="real-data-class" >
             <div className="real-data-main" >
               {
                 dammyData.map((element, index) =>
                 <Cards />
                 )
               }
             </div>
           </div>
         </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Booking;