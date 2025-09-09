import React from 'react';
import '../../assets/styles/TopNav.css';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';

const TopNav = ()=>{
  return (
    <div className="top-nav-wrapper">
     <div className="top-nav-class">
       <span style={{
         marginLeft: '15px',
       }}>Search Your Veichle</span>
       <span style={{
         marginRight: '15px',
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         gap: '5px',
       }}>
       <ArrowBackSharpIcon className="bk-icon" style={{
         fontSize: '25px',
         marginTop: '3px',
       }} />
       Back</span>
     </div>
    </div>
  );
};

export default TopNav;