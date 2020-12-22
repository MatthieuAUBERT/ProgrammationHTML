// Variables Joueurs en version "object"
var eleven =    {name:"Eleven", health:150, mana:75, attack:15, defense:8 , lastAction:null};
var serena =    {name:"Séréna", health:100, mana:150, attack:5, defense:4, lastAction:null};
var theo =      {name:"Théo",   health:100, mana:120, attack:5, defense:6, lastAction:null};
var jade =      {name:"Jade",   health:120, mana:60, attack:20, defense:6, lastAction:null};

var monster0 =   {element:null, class:"Monster", health:100, attack:10};
var monster1 =   {element:null, class:"Monster", health:100, attack:10};
var monster2 =   {element:null, class:"Monster", health:100, attack:10};

// Autres variables
var stage = 0;
var tour = 0;
var dialogue = document.getElementById('Dialogue');

var monstersElements = document.getElementsByClassName("Monstre");

// Mise en place du combat et des monstres
var monsters = [monster0, monster1, monster2];
for (var i = 0; i < monstersElements.length; i++)
{
  monsters[i].element = monstersElements[i];
  monstersElements[i].addEventListener('mouseover', changeDefOver);
  monstersElements[i].addEventListener('click', changeDefClick);
  monstersElements[i].addEventListener('mouseout', changeDefOut);
}
var target = monsters[0];
var characters = [eleven, serena, theo, jade];

// InfoBulles
function changeDefOver(e) {
  if (e.target.id == "Monstre") {
    e.target.children[0].style.visibility = "visible";
  }
}

function changeDefOut(e) {
  if (e.target.id == "Monstre") {
    e.target.children[0].style.visibility = "hidden";
  }
}

//Sélection Target
function changeDefClick(e) {
  if (e.target.id == "Monstre") {
    for (var i = 0; i < monstersElements.length; i++)
    {
      if (monstersElements[i] == e.target) {
        target = monsters[i];
      }
    }
    updateUI();
  }
}

//Fonction de victoire
function win() {
  dialogue.innerHTML = "Vous avez gagné!";
  alert("Vous avez gagné!");
}

// Changement de personnage dans l'ordre
function nextStage() {
  stage++; // stage    0 : Eleven ;     1 : Serena ;     2 : Théo ;     3 : Jade
  if (stage == 4) {
    stage = 0;
    tour++;
    console.log("Début du tour n°" + (tour + 1));
  }
  if (stage == 0 && characters[stage].mana < 15){
	  document.getElementById("special").disabled = true;
  }
  else if (stage == 1 && characters[stage].mana < 25){
	  document.getElementById("special").disabled = true;
  }
  else if (stage == 2 && characters[stage].mana < 20){
	  document.getElementById("special").disabled = true;
  }
  else if(stage == 3 && characters[stage].mana < 10){
	  document.getElementById("special").disabled = true;
  }
  else {
	  document.getElementById("special").disabled = false;
  }
    if (target.health <= 0) {
    console.log("Le monstre est mort !");
    var found = false;
    for (var i = 0; i < monsters.length; i++)
    {
      if (monsters[i].health > 0) {
        target = monsters[i];
        found = true;
        break;
      }
    }
    if (!found) {
      updateUI();
      win();
    }
  }
  updateUI();
}

//Fonction d'attaque 
function attack() {
  target.health -= characters[stage].attack;
  console.log(target.health);
  characters[stage].lastAction = "attack";
  nextStage();
}

//Fonction de défense 
function defend() {
  characters[stage].lastAction = "defend";
}

//Fonction Spéciale 
function special() {
  if (stage == 0) {
	target.health -= characters[stage].attack * 2;
	characters[stage].mana -= 15;
  } else if (stage == 1) {
	var injured = characters[0]; 
	for (var i=0;i < characters.length; i++){
		if (characters[i].health < injured.health && characters[i].health > 0){
			injured = characters[i];
		}
	}
	injured.health += 20;
	characters[stage].mana -= 25;
  } else if (stage == 2) {
    for (var i = 0; i < monsters.length; i++)
    {
      monsters[i].health -= 15;
    }
    characters[stage].mana -= 20;
  } else if (stage == 3) {
	for (var i=0; i < 4; i++){
		monsters[Math.floor((Math.random() * 100)) % monsters.length].health -= Math.floor(characters[stage].attack * 0.5) ;
	}
	characters[stage].mana -= 10;
  }
  characters[stage].lastAction = "special";
  nextStage();
}

//Affichage
function updateUI() {
  dialogue.innerHTML = "Au tour de " + characters[stage].name;
  console.log("Au tour de " + characters[stage].name);
  for (var i = 0; i < monstersElements.length; i++)
  {
    if (monsters[i].health > 0) {
      monstersElements[i].children[0].children[0].innerHTML = "Monstre " + (i + 1) + " : " + monsters[i].health + " HP";
      if (target == monsters[i]) {
        monstersElements[i].style.opacity = "100%";
      }
      else {
        monstersElements[i].style.opacity = "80%";
      }
    } else {
      monstersElements[i].style.visibility = "hidden";
    }
  }
  for (var i = 0; i < characters.length; i++)
  {
    document.getElementById("HP" + i).innerHTML = characters[i].health + " HP";
    document.getElementById("MP" + i).innerHTML = characters[i].mana  + " MP";
    if (i == stage) {
      document.getElementById("PL" + i).style.background = "#6e2e3e";
    }
    else {
      document.getElementById("PL" + i).style.background = "black";
    }
  }
}

updateUI();