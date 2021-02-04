function swapimage(id,animal) {
  // identification de la carte
  let monid = "#" + id
  // identification de l'animal sous la carte
  let card = 'img/' + animal + '.png'
  // Vérification de la classe (on ou off)
  let classe = document.querySelector(monid).classList.contains("off")
  console.log("Faut-il retourné la carte ?",classe)

  // Modification de la carte
  let elem = document.querySelector(monid)
    // Si off (montrer l'animal)
  if (classe) {
    elem.classList.replace("off","on")
    elem.src=card
    console.log(elem)
  }
    // sinon (retourner la carte face caché)
  else {
    elem.classList.replace("on","off")
    elem.src='img/cartefacecache.png'
    console.log(elem)
  }
  // COMPARAISON AVEC LA SECONDE CARTE
}