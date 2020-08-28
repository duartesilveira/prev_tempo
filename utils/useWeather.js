import { useState, useEffect } from "react";
import axios from "axios";
import { storeWeather, getWeather } from "./storeWeather";
import useGeoLocation from "./useGeoLocation";
navigator.geolocation = require('@react-native-community/geolocation');
//url
const url = "https://api.openweathermap.org/data/2.5";
//chamar API com Axios
const callAPI = axios.create({
  baseURL: url,
  timeout: 1000,
});

export default function useWeather(lat, lon) {
  //Gerir estado com Hooks
  const [weather, setWeather] = useState(null);
  //Importar localização do utilizador
  const latLon = useGeoLocation();
  //atualizar localização do utilizador com use Effect
  useEffect(() => {
    if (latLon) {
      fetchAPI(...latLon);
    }
  }, [latLon]);
  // Obter dados da API
  const fetchAPI = async (lat, lon) => {
    try {
      //endpoint
      const endpoint = `/forecast?lat=${lat}&lon=${lon}&units=metric&appid=4603c75c120c11397132db5130197a6a`;
      // 
      const res = await callAPI.get(endpoint);
      // Guardar dados 
      const data = await storeWeather(filterData(res.data));
      // Tempo na localização do utilizador 
      setWeather(data);
    } catch (err) {
      //gerir erros e recuperar dados em Cache 
      console.log("API conection failed");
      const data = await getWeather();
      setWeather(data);
    }
  };

  return weather;
}
// filtrar dados 
const filterData = (rawData) => {
  return {
    id: rawData.city.id,
    name: rawData.city.name,
    country: rawData.city.country,
    timezone: rawData.city.timezone,
    coord: {
      lat: rawData.city.coord.lat,
      lon: rawData.city.coord.lon,
    },
    list: rawData.list,
  };
};
