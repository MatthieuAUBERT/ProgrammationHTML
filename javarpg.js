// Variables Joueurs en version "object"
var serena =    {name:"Séréna", class:"Healer", health:80, mana:40, attack:5, defense:4};
var theo =      {name:"Théo", class:"Mage", health:90, mana:50, attack:5, defense:6};
var eleven =    {name:"Eleven", class:"Hero", health:100, mana:20, attack:15, defense:8};
var jade =      {name:"Jade", class:"Martial", health:120, mana:10, attack:20, defense:6};

var monster0 =   {element:null, class:"Monster", health:100, attack:15};
var monster1 =   {element:null, class:"Monster", health:100, attack:15};
var monster2 =   {element:null, class:"Monster", health:100, attack:15};

// Autres variables
var stage = 0;
var round = 0;
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
var characters = [serena, theo, eleven, jade];

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
var target = monsters[0];

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

function win() {
  dialogue.innerHTML = "Vous avez gagné!";
}

function nextStage() {
  stage = (stage + 1) % 4;
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
      win();
    }
  }
  updateUI();
}

//Fonction d'attaque (Uniquement un joueur)
function attack() {
  target.health -= 10;
  console.log(target.health);
  nextStage();
}

//Fonction de défense (Uniquement un joueur)
function defend() {
  target.health -= 10;
  console.log(target.health);
  nextStage();
}

//Fonction Spéciale (Basique)
function special() {
  target.health -= 10;
  console.log(target.health);
  nextStage();
}


function updateUI() {
  dialogue.innerHTML = "Au tour de " + characters[stage].name;
  console.log("Au tour de " + characters[stage].name);
  console.log(monstersElements.length);
  for (var i = 0; i < monstersElements.length; i++)
  {
    if (monsters[i].health > 0) {
      monstersElements[i].children[0].children[0].innerHTML = "Monstre " + i + " : " + monsters[i].health + " HP";
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
}

updateUI();