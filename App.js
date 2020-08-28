import React from "react";
import {
  RefreshControl, ScrollView
} from 'react-native';
import useWeather from "./utils/useWeather";
import Loading from "./components/Loading.js";
import Weather from "./components/Weather";
import { Container } from "./components/Styles";


export default function App() {
  // iniciar a função 
  const weather = useWeather();

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(async () => {
    //Iniciar atualização
    setRefreshing(true);
    //Nova chamada da API
    weather
    //Finalizar a atualização 
    setRefreshing(false)
  }, [refreshing]);
  //log para ver novas chamadas da API
  console.log(weather)

  return (
    <Container>
      
      {!weather ? <Loading /> : 
      
          <ScrollView refreshControl={<RefreshControl scrollEnabled={false} refreshing={refreshing} onRefresh={onRefresh} />}>

          <Weather forecast={weather}/> 
          </ScrollView >

          }

  </Container>
  );
}
