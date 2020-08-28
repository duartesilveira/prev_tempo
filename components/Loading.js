import React from "react";
import { Container, BigText, BigIcon } from "./Styles";
import imageDictionary from "../utils/imageDictionary.js";

//ecrã enquanto efetua a primeira chamada à API
const Loading = (props) => {
  return (
    <Container>
      <BigText>Bem-vindo!</BigText>
      <BigIcon source={imageDictionary["01d"]} />
    </Container>
  );
};
export default Loading;
