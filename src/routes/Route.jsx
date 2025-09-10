import React from 'react'
import { Routes, Route } from 'react-router';
import FormPut from '../components/FormPut.jsx';
import Booking from '../components/Booking.jsx';


 const Router = () => {
  return (
    <Routes>
      <Route path="/booking" element={<FormPut />} />
      <Route path="/" element={<FormPut />} />
      <Route path="/booking/car" element={<Booking />} />
    </Routes>
  );
};

export default Router;
