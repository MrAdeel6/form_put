import React, { useRef } from 'react';
import '../../assets/styles/Input.css';
import { Autocomplete } from "@react-google-maps/api";

const Input = ({
  id,
  label,
  type,
  sugg,
  Icon,
  after,
  animate,
  small,
  onClick,
  value,
  top,
  left,
  setLeft,
  setTop,
  onCh,
  onPlaceSelected // 👈 new prop to handle selected location
}) => {

  const autocompleteRef = useRef(null);

  function handleFocus(focus) {
    if (focus) {
      document.querySelector(`.${id}-in-put`).classList.add('focus-class')
    } else {
      document.querySelector(`.${id}-in-put`).classList.remove('focus-class')
    }
  };

  function handleValue(e) {
    if (onCh) {
      onCh(e);
    }
    const value = e.target.value || e.target.date;
    if (value !== '') {
      document.querySelector(`.${id}`).classList.add('value-put');
    } else {
      document.querySelector(`.${id}`).classList.remove('value-put');
    }
  }

  const onLoad = (autocomplete) => {
    autocompleteRef.current = autocomplete;
    const classInput = document.querySelector(".class-input");
    let width = window.getComputedStyle(classInput).width;

    const target = document.querySelectorAll('.pac-target-input');
    width = width.replace('px', '');
    if (target) {
      target.forEach((tar) => {
        tar.style.width = eval(width) - 35 + 'px';
      });
    }
    const styleInput = document.createElement('style');
    styleInput.innerHTML = `
    
    .pac-target-input {
      width: ${eval(width) - 35 + 'px'} !important;
    
    
    `;
    document.body.appendChild(styleInput);
  };

  const onPlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      if (onPlaceSelected) {
        onPlaceSelected(place); // return full place object
      //  alert(JSON.stringify(place.geometry))
      // loading system end ;
      }
    }
  };

  return (
    <div
      className={`class-input ${id}-in-put ${animate ? 'animate' : ''} ${
        small ? 'small-input' : ''
      }`}
    >
      <Icon
        style={{
          color: '#ae9035',
          fontSize: 24,
        }}
      />

      {/* Wrap input in Autocomplete only if sugg=true */}
      {sugg ? (
        <Autocomplete
          onLoad={onLoad}
          onPlaceChanged={onPlaceChanged}
          options={{
            componentRestrictions: { country: "usa" }, // ✅ Only USA
        //    types: ["(cities)"], // ✅ Only cities; use ["geocode"] for full addresses
          }}
        >
          <input
            value={value}
            readOnly={type === "time" ? true : false}
            onClick={(e) => {
              onClick && onClick();
              if (id === 'time') {
                setLeft?.(e.pageX + "px");
                setTop?.(e.pageY + "px");
              }
            }}
            placeholder={label}
            onInput={(e) => { handleValue(e) }}
            onBlur={() => { handleFocus(false) }}
            onFocus={() => { handleFocus(true) }}
            className="input"
            type={type ? type : 'text'}
            id={id ? id : 'hash'}
          />
        </Autocomplete>
      ) : (
        <input
          value={value}
          readOnly={type === "time" ? true : false}
          onClick={(e) => {
            onClick && onClick();
            if (onClick) {
              setLeft(e.pageX + "px");
              setTop(e.pageY + "px");
            }
          }}
          placeholder={label}
          onInput={(e) => { handleValue(e) }}
          onBlur={() => { handleFocus(false) }}
          onFocus={() => { handleFocus(true) }}
          className="input"
          type={type ? type : 'text'}
          id={id ? id : 'hash'}
        />
      )}

      <label style={{ display: "none" }} className={id ? id : ''}>
        {label ? label : 'Label'}
      </label>

      {/*after && after*/}
    </div>
  );
};

export default Input;