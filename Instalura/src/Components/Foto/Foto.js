import React, {Fragment} from 'react';
import {
  Image,
} from 'react-native';
import estilo from "./estilo";

const Foto = () => {
  return (
    <Image source={require("../../../res/img/alura.jpg")}
        style={estilo.imagem}
    />
  );
};

export default Foto;