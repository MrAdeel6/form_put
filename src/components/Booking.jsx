import React, { useEffect, useState } from 'react';
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
import { useNavigate } from 'react-router';


const Booking = () => {
 const navigate = useNavigate();
 const [ dataMain, setMain ] = useState({});


   function getTokens() {
    const datas = sessionStorage.getItem("form-data");
    console.log(datas)
    const { startLoc, endLoc, date, time, id } = datas ? JSON.parse(datas) : {} ;
    if(startLoc) {
      // gets show dataa
      setMain(JSON.parse(datas))
    } else {
      navigate("/booking");
      window.location.reload();
    }
  } 


  useEffect(()=>{
    getTokens();
  }, [])






  const [showSidebar, setShowSidebar] = useState(false);
  const dammyData = [
    { carName: 'Car Name', carImg: '../assets/images/', carDes: '', req: {
      messger: 3,
      other: 3,
    }, options: ['icon', 'icon', 'icon', 'icon'], prize: 130, disPrize: 100, include: 'include ...' },
    { carName: 'Car Name', carImg: '../assets/images/', carDes: '', req: {
      messger: 3,
      other: 3,
    }, options: ['icon', 'icon', 'icon', 'icon'], prize: 130, disPrize: 100, include: 'include ...' },
    { carName: 'Car Name', carImg: '../assets/images/', carDes: '', req: {
      messger: 3,
      other: 3,
    }, options: ['icon', 'icon', 'icon', 'icon'], prize: 130, disPrize: 100, include: 'include ...' },
    { carName: 'Car Name', carImg: '../assets/images/', carDes: '', req: {
      messger: 3,
      other: 3,
    }, options: ['icon', 'icon', 'icon', 'icon'], prize: 130, disPrize: 100, include: 'include ...' },
    { carName: 'Car Name', carImg: '../assets/images/', carDes: '', req: {
      messger: 3,
      other: 3,
    }, options: ['icon', 'icon', 'icon', 'icon'], prize: 130, disPrize: 100, include: 'include ...' },
    { carName: 'Car Name', carImg: '../assets/images/', carDes: '', req: {
      messger: 3,
      other: 3,
    }, options: ['icon', 'icon', 'icon', 'icon'], prize: 130, disPrize: 100, include: 'include ...' },
  ];

  return (
    <div className="booking-page">
      <TopNav />

      {/* Sidebar Toggle Button (tablet/mobile) */}
      <div className="sidebar-toggle-btn">
        <button onClick={() => setShowSidebar(!showSidebar)}>
          {showSidebar ? "Hide Trip Details" : "Show Trip Details"}
        </button>
      </div>

      <div className="main-work-class">
        {/* Sidebar Section */}
        <div className={`details-class ${showSidebar ? "active" : ""}`}>
          <div className="map-class">
            <div className="map"><Map /></div>
            <div className="map-details">
              <div className="distance-class">
                <SocialDistanceIcon className="dis-icon" />
                <span>100km</span>
              </div>
              <div className="duration-class">
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
                  <RoomSharpIcon />
                  <div className="de-class">
                    <span>{dataMain.startLoc}</span>
                    <des></des>
                  </div>
                </div>
                <div className="end-point-main" >
                  <RoomSharpIcon className="mark-icon" />
                  <div className="de-class">
                    <span>{dataMain.endLoc}</span>
                    <des></des>
                  </div>
                </div>
              </div>
              <div className="trip-details-class" >
                <div className="trip-details-main" >
                  <div className="date-main">
                    <DateRangeSharpIcon />
                    <span>{dataMain.date}</span>
                  </div>
                  <div className="time-main">
                    <AccessTimeIcon />
                    <span>{dataMain.time}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="sidebar-toggle-btn">
              <button onClick={() => setShowSidebar(!showSidebar)}>
                {showSidebar ? "Hide Trip Details" : "Show Trip Details"}
              </button>
            </div>
          </div>

        </div>

        {/* Right Side Booking Cards */}
        <div className="books-class">
          <div className="books-main">
            <div className="real-data-class">
              <div className="real-data-main">
                {dammyData.map((element, index) => (
                  <Cards data={element} index={index} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Booking;
