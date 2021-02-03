function swapimage() {
  let classe = document.querySelector("img").classList.contains("off")
  console.log(classe)
  let elem = document.querySelector("#carte1")
  if (classe) {
    console.log("c'est le else")
    elem.classList.replace("off","on")
    elem.src='img/mouton.png'
    console.log(elem)
  }
  else {
    console.log("c'est le else")
    elem.classList.replace("on","off")
    elem.src='img/cartefacecache.png'
    console.log(elem)
    // marche mes retourne la carte instant car éxécution du code => instant
    // transition à mettre jusqu'à 'click' d'une autre carte
  }
}