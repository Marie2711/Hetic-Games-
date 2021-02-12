var myanimals = ["img/ecureuil.png","img/ecureuil.png","img/elephant.png","img/elephant.png","img/escargot.png","img/escargot.png","img/hiboux.png","img/hiboux.png","img/mouton.png","img/mouton.png","img/singe.png","img/singe.png"]
var allanimals = []
var mesid = []
var myanimal = []
var ok
var time = 45
var sec = 0

function go() {
  ok = true
  document.getElementById("go").onclick="null"
  var timer = document.getElementById("timer").innerHTML
  function addsec() {
    if (timer >= 1) {
      sec++
      timer = time - sec
      document.getElementById("timer").innerHTML = timer
    }
    else {
      timer = 0
      document.getElementById("timer").innerHTML = timer
      console.log("timer :",timer)
      document.querySelector("#memorygame").id="lose"
      document.querySelector("#lose").innerHTML="<h2>Manque de temps tu as perdu...</h2>"
      document.querySelector("#lose").innerHTML+="<a id='go' href='index.html'>Recommencer</a>"
      }
  }
  setInterval(addsec, 1000)
  function myscore() {
    var score = parseInt(document.getElementById("score").innerHTML)
    if (timer == 30 || timer == 15 || timer == 1) {
      score-=10
    }
    document.getElementById("score").innerHTML = score
  }
  setInterval(myscore, 1000)
  return ok
}



function random(min,max) {
    return Math.round(Math.random() * (max-min))
    // si min > 0 ajouter un +min pour le décalage entre 0 et min
    // Math.round pour générer des integers
    // (max - min) pour définir la plage des nombres possible (8-1) ==> nbr entre 1 et 8
    // + min pour définir le décalage (pas de nbr entre 0 et 1)
}

function generate() {
  console.log(document.querySelector("#carte1"))
  for (let i = (myanimals.length-1); i >= 0; i--) {
      var alea = random(0,i)
      document.getElementById("carte"+[i]).src = myanimals[alea]
      document.getElementById("carte"+[i]).classList.add("off")
      allanimals.push(myanimals[alea])
      myanimals.splice(alea,1)
  }
  allanimals.reverse()
  myanimals = allanimals
  allanimals = null
  console.log(myanimals)
  for (let i = (myanimals.length-1); i >= 0; i--) {
    document.getElementById("carte"+[i]).src = "img/thecartefacecache.png"
  }
}


function compar(id,animal) {
  if (ok) {
    if (!mesid[0] && !myanimal[0]) {
      mesid[0] = id
      myanimal[0] = animal
      document.getElementById("tips").innerHTML="Sélectionnez une autre carte..."
      let card1 = document.querySelector("#" + id)
      openimage(card1,animal)
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
}

function swapimage() {
  // score
  let score = parseInt(document.getElementById("score").innerHTML)
  
  // identification des cartes
  let elem1 = "#" + mesid[0]
  let elem2 = "#" + mesid[1]
  // identification de l'animal sous la carte
  let ani1 = myanimal[0]
  let ani2 = myanimal[1]
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
  // setTimeout(function() {"truc"},time en ms)
    setTimeout(function() {
      if (ani1 == ani2) {
        win(card1)
        win(card2)
        document.getElementById("tips").innerHTML = "Bien joué !"
        score+=50
        document.querySelector("#score").innerHTML = score
      }
      else {
        closeimage(card1)
        closeimage(card2)
        document.getElementById("tips").innerHTML = "mmmmhhh..."
        score-=20
        document.querySelector("#score").innerHTML = score
      }
    },1000);
    console.log("mon score:",score)
    mesid = []
    myanimal = []
  }
}

function openimage(card,ani) {
  card.classList.replace("off","on")
  card.src=ani
  card.style=null
  console.log(card)
}

function win(card) {
  card.style.visibility='hidden'
  allanimals+=1
  if (allanimals == 12) {
    document.querySelector("#memorygame").id="win"
    document.querySelector("#win").innerHTML="<h2>Félicitations la partie est terminé !</h2>"
    document.querySelector("#win").innerHTML+="<a id='go' href='index.html'>Recommencer</a>"
  }
}

function closeimage(card) {
  card.classList.replace("on","off")
  card.src="img/thecartefacecache.png"
  card.style='cursor:pointer'
}