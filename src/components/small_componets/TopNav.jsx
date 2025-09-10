import React from 'react';
import '../../assets/styles/TopNav.css';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';

const TopNav = () => {
  return (
    <div className="top-nav-wrapper">
      <div className="top-nav-class">
        {/* Left Title */}
        <span style={{ marginLeft: '15px' }}>
          Search Your Vehicle
        </span>

        {/* Right Icons and Steps */}
        <span
          style={{
            marginRight: '15px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '15px',
          }}
        >
          {/* Step Indicator */}
          <div className="step-box">
            <span className="step active">1</span>
            <span className="step">2</span>
            <span className="step">3</span>
          </div>

          {/* Back Icon */}
          <ArrowBackSharpIcon
            className="bk-icon"
            style={{
              fontSize: '32px',
              marginTop: '2px',
              cursor: 'pointer',
            }}
          />
        </span>
      </div>
    </div>
  );
};

export default TopNav;
