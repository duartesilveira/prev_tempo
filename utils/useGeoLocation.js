import { useState, useEffect } from "react";
//Obter a localização do utilizador
export default function useGeoLocation(lat, lon) {
  const [latLon, setLatLon] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatLon([position.coords.latitude, position.coords.longitude]);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  return latLon;
}
