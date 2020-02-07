import React, {Fragment, useState} from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import estilo from "./estilo";
import { pegarImgsLike, curtirFoto } from '../../api/curtiu';

// Eu não desconstrui a props como fiz na classe Cabeçalho para ter as 2 opções no projeto
const Foto = (props) => {

  const [curtiu, setCurtiu] = useState(false);
  const [likes, setLikes] = useState(props.qtdeCurtidas);

  function clicouCurtir(){
    let [qtde, curtiuNovo] = curtirFoto(likes, curtiu)
    setLikes(qtde);
    setCurtiu(curtiuNovo);
  }

  return (
    <Fragment>
      <Image source={ {uri: props.urlImagem} }
          style={estilo.imagem}
      />
      <Text>{props.descricao}</Text>
      <TouchableOpacity onPress={clicouCurtir}>
        <View style={estilo.viewLike}>
          <Image source={ pegarImgsLike(curtiu) }
              style={estilo.like}
          />
          <Text>Curtiu {likes}</Text>
        </View>
      </TouchableOpacity>
    </Fragment>
  );
};

export default Foto;