import {StyleSheet, Dimensions} from "react-native"

const largura = Dimensions.get("screen").width

const estilo = StyleSheet.create({
    conteiner:{
       flexGrow:2,
       justifyContent:"center",
       alignItems:"center"
    }, 
    inputs:{
        width:largura*0.8,
        textAlign:"center",
        marginTop:20,
        fontSize:20,
    },
    buttonView:{
        justifyContent:"flex-end",
        marginBottom:20
    }
})

export default estilo