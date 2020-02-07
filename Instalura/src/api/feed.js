const lerFotos = async(callback) => {
    const fotosHttp = await fetch("http://localhost:3030/feed");
    const fotosJson = await fotosHttp.json();
    callback(fotosJson);
}
  
export default lerFotos;