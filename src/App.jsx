import { useState } from 'react'
import Router from './routes/Route.jsx';
import Booking from '../src/components/Booking.jsx';
import FormPut from '../src/components/FormPut.jsx';
import { LoadScript } from "@react-google-maps/api";

function App() {
  
  const [ booking, setBooking ] = useState(false);
  const [ form, setForm ] = useState(true);
  const [ data, setData ] = useState({});

  return (
    <>
     <div style={{
       
     }}>
  <LoadScript
  loadingElement={
    <div style={{
      display: 'flex',
      height: '100vh',
      width: '100vw',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        height: '40px',
        width: '40px',
        borderRadius: '50%',
        border: '4px solid lightgray',
        borderTop: '4px solid #d4af37',
        animation: 'load 0.5s Infinite linear',
      }}></div>
    </div>
  }
  googleMapsApiKey="AIzaSyDodpqedFYFgBV-EEWIpOtXwRaodqzLgQQ"
  libraries={["places"]}
  region="US"
  language="en"
  
       >
       <FormPut setData={setData} setBooking={setBooking} visible={form} setVisible={setForm} />
      <Booking setForm={setForm} data={data} visible={booking} setVisible={setBooking} />
   </LoadScript>
     </div>
    </>
  )
}

export default App;
