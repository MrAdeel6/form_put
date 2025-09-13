import React, { useEffect, useState, useCallback } from "react";
import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};



function Map({ dataMain, call, setDuration, setDistance }) {
  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  
  const defaultCenter = { lat: dataMain.placeAdress1 ? dataMain.placeAdress1.lat : 39.8283, lng: dataMain.placeAdress1 ? dataMain.placeAdress1.lng : -98.5795 }; // USA center;;

  /*const markRoute = useCallback(() => {
    if (!dataMain?.startPlaceId || !dataMain?.endPlaceId) return;

    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: { lat: dataMain.placeAdress1.lat, lng: dataMain.placeAdress1.lng },       // ✅ pickup from Autocomplete
        destination: { lat: dataMain.placeAdress2.lat, lng: dataMain.placeAdress2.lng },   // ✅ drop from Autocomplete
        travelMode: window.google.maps.TravelMode.DRIVING,
      }
    );
  }, [dataMain]); */
  const markRoute = () => {
  if (!dataMain?.placeAdress1 || !dataMain?.placeAdress2) return;

  const directionsService = new window.google.maps.DirectionsService();

  directionsService.route(
  {
    origin: dataMain.startLoc,
    destination: dataMain.endLoc,
    travelMode: window.google.maps.TravelMode.DRIVING
  },
  (result, status) => {
    if (status === "OK" && result) {
      setDirectionsResponse(result);
      setDistance((result.routes[0].legs[0].distance.value / 1000).toFixed(2)+'km');
      setDuration(result.routes[0].legs[0].duration.text)
      console.log("Route found ✅", result);
    } else {
      console.error("Directions request failed: ", status);
    }
  }
);
};
  

  useEffect(() => {
    if(call) {
    markRoute();
    }
  }, [dataMain])

  const onLoad = useCallback((mapInstance) => {
    setMap(mapInstance);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, [])

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={defaultCenter}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {directionsResponse && (
        <DirectionsRenderer directions={directionsResponse}
        /* options={{
    polylineOptions: {
      strokeColor: "#ae9035",   // route ka color (red)
      strokeOpacity: 1,       // transparency
      strokeWeight: 5,          // line thickness
    },
    suppressMarkers: false,     // agar apna custom marker banana ho to true kar do
    preserveViewport: true,     // map ka zoom preserve karega
  }} */
        />
      )}
    </GoogleMap>
  );
}

export default React.memo(Map);