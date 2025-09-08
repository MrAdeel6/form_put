import React from 'react'
import '../../assets/styles/Input.css';



const Input = ({ id, label, type, sugg, Icon, after, animate, small }) => {
  function handleFocus(focus) {
    if (focus) {
      document.querySelector(`.${id}-in-put`).classList.add('focus-class')
    } else {
      document.querySelector(`.${id}-in-put`).classList.remove('focus-class')
    }
  };
  
  function handleValue(e) {
    const value = e.target.value || e.target.date;
    if(value !== '') {
      document.querySelector(`.${id}`).classList.add('value-put');
    } else {
      document.querySelector(`.${id}`).classList.remove('value-put');
    }
  }
  
  return (
    <div className={`class-input ${id}-in-put ${animate ? 'animate' : '' } ${small?'small-input':''}`} >
      <Icon style={{
        color: 'gray',
        fontSize: 24,
      }} />
      <input onInput={(e)=>{handleValue(e)}} onBlur={() => { handleFocus(false) }} onFocus={() => { handleFocus(true) }} className={`input `} type={type ? type : 'text'} id={id ? id : 'hash'} />
      <label className={id?id:''}>{label ? label : 'Label'}</label>
      {
        after &&
        after
      }
    </div>
  )
};

export default Input;