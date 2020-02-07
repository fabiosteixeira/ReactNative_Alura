function pegarImgsLike(curtiuAgora){
    if (curtiuAgora) {
      return require("../../res/img/s2-checked.png")
    } else {
      return require("../../res/img/s2.png")
    }
}

function curtirFoto(likes, curtiu){
    let qtde = likes;
    if (curtiu) {
      qtde--
    } else {
      qtde++
    }
    return [qtde, !curtiu]
}

export {pegarImgsLike, curtirFoto}