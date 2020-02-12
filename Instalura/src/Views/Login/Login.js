import React, {Fragment} from 'react';
import {
  Text,
  TextInput,
  Button,
  View
} from 'react-native';

import estilo from "./estilo"

const Login = () => {

  const tentarLogar = () => {
    console.warn("logando")
  }

  return (
    <Fragment>
      <View style={estilo.conteiner}>
        <TextInput
          style={estilo.inputs}
          placeholder="Usuário"
        />
        <TextInput
          style={estilo.inputs}
          placeholder="Senha"
          secureTextEntry={true}
        />
      </View>
      <View
        style={estilo.buttonView}>
        <Button          
          title="Entrar"
          onPress={tentarLogar}
        />
      </View>
    </Fragment>
  );
};

export default Login;
