import React, { useState, useEffect } from 'react';
import '../assets/styles/FormPut.css';
import Input from '../components/small_componets/Input.jsx';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import Rating from '../assets/images/HeaderRating.439acd18.svg'

const FormPut = () => {
  const [ activeNav, setNav ] = useState('');
  const [ stopInput, setStops ] = useState([]);
  
  
  function ActiveNavBtn(e) {
  const topNavBtn = document.querySelectorAll(".button-class button");
    topNavBtn.forEach((item) => {
      item.classList = '';
    });
    e.target.classList = "active-btn";
    setNav(e.target.innerText);
  }
  return (
  <>
    <div className="wrapper" >
       <div className="class">
         <div className="top-nav-button">
           <div className="button-class">
             <button onClick={(e)=>{ActiveNavBtn(e)}} className="active-btn">POINT-TO-POINT</button>
           </div>
           <div onClick={(e)=>{ActiveNavBtn(e)}} className="button-class">
             <button>HOURLY</button>
           </div>
         </div>
         <div className="input-class">
           <Input label="Pickup Location" id="pic-loc" Icon={LocationPinIcon} type={'location'} after={
             (<div onClick={()=>{
               var tem = [...stopInput];
               tem.push({});
               setStops(tem);
             }} className="after-input">
              <span>Add Stop</span>
             </div>)
           } />
           {
             stopInput.length !== 0 &&
             stopInput.map((element, index) =>
           <Input label="Stop Location" id={`stop-input-${index}`} Icon={LocationPinIcon} type={'location'} />)
           }
           <Input label="End location" id="end-loc" Icon={LocationPinIcon} type={'location'} />
           {
             activeNav === 'HOURLY' && 
             <Input label="Hour" id="hour" Icon={AccessTimeFilledIcon} type="hour" animate={true} />
           }
           <div className="bottom-input">
             <Input small={true} type="date" id="date" label="Date" Icon={DateRangeOutlinedIcon} />
             <Input small={true} type="time" id="time" label="Time" Icon={DateRangeOutlinedIcon} />
           </div>
           <div className="des-class">
           <HistoryOutlinedIcon style={{
             fontSize: 15,
           }} />
             <span>Chauffeur will wait 25 minutes as a complimentary service</span>
           </div>
           <div className="search-btn-class">
             <div className="button">
               <span>SEARCH</span>
               <ArrowForwardOutlinedIcon className="arrow-icon" />
             </div>
           </div>
         </div>
       </div>
    </div>
       <div className="review-box-wrapper">
         <div className="review-box-class">
          <img src={Rating} />
         </div>
       </div>
    </>
  );
};

export default FormPut;