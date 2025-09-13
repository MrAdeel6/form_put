import React, { useState, useEffect } from 'react';
import '../assets/styles/FormPut.css';
import Input from '../components/small_componets/Input.jsx';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import Rating from '../assets/images/HeaderRating.439acd18.svg';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import EventIcon from '@mui/icons-material/Event';
import ScheduleIcon from '@mui/icons-material/Schedule';
import TimePickerPopup from './small_componets/TimePicker.jsx';
import { LoadScript } from "@react-google-maps/api";
import { useNavigate } from 'react-router';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FormPut = ({ visible, setVisible, setBooking, setData }) => {
  const navigate = useNavigate();


  const [activeNav, setNav] = useState('');
  const [stopInput, setStops] = useState([]);
  const [show, setShow] = useState("none");
  const [time, setTime] = useState("0:00");
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  const [startLoc, setSLoc] = useState("");
  const [endLoc, setELoc] = useState("");
  const [date, setDate] = useState("");
  const [ placeAdress1, setPlace1 ] =  useState({});
  const [ placeAdress2, setPlace2 ] =  useState({});

  function handleSubmit() {
    sessionStorage.setItem('form-data', JSON.stringify({
      startLoc,
      endLoc,
      time,
      date
    }));
    if (startLoc) {
      if (endLoc) {
        if (time !== '0:00') {
          if (date !== '') {
            setData({
              startLoc,
              endLoc,
              time,
              date,
              placeAdress1,
              placeAdress2
            });
            setVisible(false);
            setBooking(true);
          } else {
            alert('set Date');
          }
        } else {
          alert('set time and date')
        }
      } else {
        alert('fill location and other')
      }
    } else {
      alert('fill location and other')
    }

    
  }



  function ActiveNavBtn(e) {
    const topNavBtn = document.querySelectorAll(".button-class button");
    topNavBtn.forEach((item) => {
      item.classList = '';
    });
    e.target.classList = "active-btn";
    setNav(e.target.innerText);
  }

  const handlePickupS = (place) => {
    const places = place.formatted_address;
    setSLoc(places);
    setPlace1(place.geometry.location);
  };

  const handlePickupL = (place) => {
    const places = place.formatted_address;
    setELoc(places);
    setPlace2(place.geometry.location);
  };





  return (
    <>
      <div className="wrapper" style={{
        display: visible ? 'flex' : 'none',
      }} >
        <div className='bolder-class'>
          <div className="class">
            <div className="top-nav-button">
              <div className="button-class">
                <button onClick={(e) => { ActiveNavBtn(e) }} className="active-btn">POINT-TO-POINT</button>
              </div>
              <div onClick={(e) => { ActiveNavBtn(e) }} className="button-class">
                <button>HOURLY</button>
              </div>
            </div>
            <div className="input-class">
              <Input onPlaceSelected={handlePickupS} sugg={true} label="Pickup Location" id="pic-loc" Icon={AddLocationAltIcon} type={'location'} after={
                (<div onClick={() => {
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
                  <Input label="Stop Location" id={`stop-input-${index}`} Icon={AddLocationAltIcon} type={'location'} />)
              }
              <Input sugg={true} onPlaceSelected={handlePickupL} label="Drop Location" id="end-loc" Icon={AddLocationAltIcon} type={'location'} />
              {
                activeNav === 'HOURLY' &&
                <Input label="Hour" id="hour" Icon={AccessTimeFilledIcon} type="hour" animate={true} />
              }
              <div className="bottom-input">
                <Input small={true} onCh={(e) => {
                  setDate(e.target.value);
                  console.log("this " + e.target.value);
                }} type="date" id="date" label="Date" Icon={EventIcon} />
                <Input setLeft={setLeft} setTop={setTop} top={top} left={left} value={time} onClick={(e) => {
                  if (show == 'none') {
                    setShow("block")
                  } else {
                    setShow("none")
                  }
                }} small={true} type="input" id="time" label="Time" Icon={ScheduleIcon} />
              </div>
              <div className="des-class">
                <HistoryOutlinedIcon style={{
                  fontSize: 15,
                }} />
                <span>Chauffeur will wait 25 minutes as a complimentary service</span>
              </div>
              <div className="search-btn-class">
                <div className="button" onClick={() => {
                  handleSubmit();
                }}>
                  <span>SEARCH</span>
                  <ArrowForwardOutlinedIcon className="arrow-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TimePickerPopup show={show} onShow={setShow} onSet={setTime} left={left} top={top} />
      <div className="review-box-wrapper" style={{
        display: "none"
      }}>
        <div className="review-box-class">
          <img src={Rating} />
        </div>
      </div>
       <DatePicker
        selected={""}
        onChange={(date) => ''}
        dateFormat="dd/MM/yyyy"
        placeholderText="Pick a date"
      />
    </>
  );
};

export default FormPut;