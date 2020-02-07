import React, {Fragment, useState, useEffect} from 'react';
import {
  ScrollView,
  FlatList,
} from 'react-native';
import { Cabecalho } from './src/Components/Cabecalho';
import { Foto } from './src/Components/Foto';
import { Comentarios } from './src/Components/Comentarios';

import lerFotos from './src/api/feed';

// const informacoes = [
//     {id: 1, usuario: "Fábio Teixeira"},
//     {id: 2, usuario: "Lara Cossenzo"},
//     {id: 3, usuario: "Thaís Cossenzo"},
// ]

const App = () => {

  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    lerFotos(setFotos);
  }, []);

  return (
    <Fragment>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">

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
                  />
                  <Comentarios
                     comentarios = {item.comentarios}
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

export default App;
