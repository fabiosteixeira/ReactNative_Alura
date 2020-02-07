import React, {Fragment, useState} from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import estilo from "./estilo";

const Comentarios = ( {comentarios} ) => {
    return (
        <FlatList
            data={comentarios}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => 
            <Text>{item.text}</Text>
        }
        />
    );
}

export default Comentarios