import React, {Fragment, useState, useEffect} from 'react';
import {
  ScrollView,
  FlatList,
  StatusBar,
  Platform,
} from 'react-native';
import { Cabecalho } from '../../Components/Cabecalho';
import { Foto } from '../../Components/Foto';
import { Comentarios } from '../../Components/Comentarios';
import { pegarImgsLike, curtirFoto } from '../../api/curtiu';
import adicionarComentario from '../../api/comentario';

import lerFotos from '../../api/feed';

// const informacoes = [
//     {id: 1, usuario: "Fábio Teixeira"},
//     {id: 2, usuario: "Lara Cossenzo"},
//     {id: 3, usuario: "Thaís Cossenzo"},
// ]

const Feed = () => {

  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    lerFotos(setFotos);
  }, []);

  let marginRefTop = 0;
  if (Platform.OS === "ios")
    marginRefTop = 20;

  return (
    <Fragment>
        <StatusBar
          backgroundColor="white"
          barStyle="dark-content"/>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{marginTop: marginRefTop}}>

            {/* Exemplo de iteração utilizando o FlatList */}
            <FlatList
              data={fotos}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => 
                <Fragment>
                  <Cabecalho 
                    nomeUsuario={item.userName}
                    userURL={item.userURL}
                  />
                  <Foto
                    urlImagem = {item.url}
                    descricao = {item.description}
                    qtdeCurtidas = {item.likes}
                    pegarImgsLike = {pegarImgsLike}
                    curtirFoto = {curtirFoto}
                  />
                  <Comentarios
                     comentarios = {item.comentarios}
                     adicionarComentario = {adicionarComentario}
                  />
                </Fragment>
              }
            />
            
            {/* Exemplo de iteração utilizando o map para renderização */}
            {/* {informacoes.map(foto => 
                <Fragment>
                  <Text>{foto.usuario}</Text>
                  <Image source={require("./res/img/alura.jpg")}
                    style={estilo.imagem}
                  />
                </Fragment>
              )} */}
        </ScrollView>
    </Fragment>
  );
};

export default Feed;
