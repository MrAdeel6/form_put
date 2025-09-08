import React from 'react'
import { Routes, Route } from 'react-router';
import FormPut from '../components/FormPut.jsx';

 const Router = () => {
  return (
    <Routes>
      <Route path="/form-put" element={<FormPut />} />
    </Routes>
  );
};

export default Router;