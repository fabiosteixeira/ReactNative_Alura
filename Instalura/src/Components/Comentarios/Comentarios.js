import React, {Fragment, useState} from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Vibration,
} from 'react-native';
import estilo from "./estilo";

const Comentarios = ( {comentarios} ) => {

    const [estComentarios, setComentarios] = useState(comentarios);

    const adicionaComentario = () => {
        campoInput.clear()

        novoComentario = {
            date: Date.now(),
            text: conteudoCampoInput,
            userName: "Fabão"
        }

        setComentarios([...estComentarios, novoComentario])
    }

    let conteudoCampoInput = "";
    let campoInput;

    return (
        <Fragment>
            <FlatList
                data={estComentarios}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => 
                <View style={estilo.mesmaLinha}>
                    <Text>{item.userName}  </Text>
                    <Text>{item.text}</Text>
                </View>
            }
            />
            <View style={estilo.mesmaLinha}>
                <TextInput
                    ref={ref => campoInput = ref}
                    placeholder={"Deixe seu comentário..."}    
                    style={estilo.textInput}
                    onChangeText={texto => conteudoCampoInput = texto}
                />
                <TouchableOpacity onPress={adicionaComentario}>
                    <Image
                        source={require("../../../res/img/send.png")}
                        style={estilo.imgSend}
                    />
                </TouchableOpacity>
            </View>
        </Fragment>
    );
}

export default Comentarios