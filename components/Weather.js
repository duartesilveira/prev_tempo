import React from "react";
import { isSameDay } from "date-fns";
import imageDictionary from "../utils/imageDictionary.js";
import {
    Container,
    CurrentDay,
    City,
    BigText,
    BigIcon,
    Temp,
    Description,
    SmallText
} from "./Styles";

const Weather = ({ forecast: { name, list, timezone } }) => {
    //tempo atual 
    const currentWeather = list.filter((day) => {
        //Hora
        const now = new Date().getTime() + Math.abs(timezone * 1000);
        // Data 
        const currentDate = new Date(day.dt * 1000);

        return isSameDay(now, currentDate);
    });
//ecrã principal
    return (
        currentWeather.length > 0 && (
            <Container>
  <SmallText>Arraste para atualizar</SmallText>
                <CurrentDay>
                    <City>{name}</City>
                    <BigText>Hoje</BigText>
                    <BigIcon
                        source={
                            imageDictionary[
                                currentWeather[0].weather[0].icon
                            ] || imageDictionary["02d"]
                        }
                    />
                    <Temp>{Math.round(currentWeather[0].main.temp)}°C</Temp>
                    <Description>
                        {currentWeather[0].weather[0].description}
                    </Description>
                </CurrentDay>
            </Container>
        )
    );
};
export default Weather;
