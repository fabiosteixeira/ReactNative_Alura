import {Platform} from 'react-native';

const lerFotos = async(callback) => {
    let fotosHttp;
    if (Platform.OS === "android")
      fotosHttp = await fetch("http://10.0.2.2:3030/feed");
    else
      fotosHttp = await fetch("http://localhost:3030/feed");
    const fotosJson = await fotosHttp.json();
    callback(fotosJson);
}
  
export default lerFotos;