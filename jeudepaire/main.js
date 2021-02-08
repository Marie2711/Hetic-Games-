function random(min,max) {
  return Math.round(Math.random() * (max-min) + min)
  // Math.round pour générer des integers
  // (max - min) pour définir la plage des nombres possible (8-1) ==> nbr entre 1 et 8
  // + min pour définir le décalage (pas de nbr entre 0 et 1)
}

var liste = ["mouton","mouton","singe","singe","elephant","elephant","hiboux","hiboux"]
var mesid = {}
var myanimal = {}

function animalchoice() {
  let alea = random(1,8)

}

function compar(id,animal) {
  if (!mesid[0] && !myanimal[0]) {
    mesid[0] = id
    myanimal[0] = animal
  }
  else if ((!mesid[1] && id != mesid[0])){
    mesid[1] = id
    myanimal[1] = animal
  }
  else {
    console.log("ne rien faire ")
  }
  if (mesid[0] && mesid[1] && myanimal[0] && myanimal[1]) {
    console.log(mesid, myanimal)
    swapimage()
  }
}


function swapimage() {
  // score
  let score = document.getElementById("score").innerHTML
  score = parseInt(score)
  // identification des cartes
  let elem1 = "#" + mesid[0]
  let elem2 = "#" + mesid[1]
  // identification de l'animal sous la carte
  let ani1 = 'img/' + myanimal[0] + '.png'
  let ani2 = 'img/' + myanimal[1] + '.png'
  // Vérification de la classe (on ou off)
  let classe1 = document.querySelector(elem1).classList.contains("off")
  let classe2 = document.querySelector(elem2).classList.contains("off")

  // Modification de la carte
  let card1 = document.querySelector(elem1)
  let card2 = document.querySelector(elem2)
  // Si off ==> switch on (montrer l'animal)
  
  if (classe1,classe2) {
    // Montrer les cartes
    openimage(card1,ani1)
    openimage(card2,ani2)
    // Temps de comparaison entre cartes...
  // setTimeout(function() {"truc que tu veux"},time'en s *1000)
    setTimeout(function() {
      if (ani1 == ani2) {
        win(card1)
        win(card2)
        score+=50
      }
      else {
        closeimage(card1)
        closeimage(card2)
        score-=30
      }
    },1000);
    console.log("mon score:",score)
    mesid = {}
    myanimal = {}
  }
}
function openimage(card,ani) {
  card.classList.replace("off","on")
  card.src=ani
  card.style=null
  console.log(card)
}

function win(card) {
  card.style.visibility='hidden';
}
function closeimage(card) {
  card.classList.replace("on","off")
  card.src="img/cartefacecache.png"
  card.style='cursor:pointer'
}