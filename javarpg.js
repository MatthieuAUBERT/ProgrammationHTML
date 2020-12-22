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

// Boucle du combat
while ((VieJ1 != 0 && VieJ2 != 0 && VieJ3 != 0 && VieJ4 !=0) || (VieM1 != 0 && VieM2 != 0 && VieM3 != 0)) {
	//Actions Joueurs
	//Variables Défense
var ArmorJ1 = 2;
var ArmorJ2 = 0;
var ArmorJ3 = 1;
var ArmorJ4 = 1;
  for (let i=0; i<4 ; i++){
    if (Attaque.onclick) {
      Att(i);
    }
    else if (Defense.onclick){
      Def(i);
    }
    else if (Special.onclick){
      Spe(i);
    }
	if (i==1){
		Dialogue.innerHTML = "Que doit faire Séréna?"
	}
	else if (i==2){
		Dialogue.innerHTML = "Que doit faire Théo?"
	}
	else if (i==3){
		Dialogue.innerHTML = "Que doit faire Jade?"
	}
  }
  //Fin Tour Joueur | Début Tour Monstre
VieM1.innerHTML = "Monstre A : ", HPM1 ," Hp";
VieM2.innerHTML = "Monstre B : ", HPM2 ," Hp";
VieM3.innerHTML = "Monstre C : ", HPM3 ," Hp";
//En cas de mort d'un ou plusieurs monstres
if (HPM1 == 0){
	document.getElementById("Monstre1").style.visibility = "hidden";
	AttaqueM -= 5
}
else if (HPM2 == 0){
	document.getElementById("Monstre2").style.visibility = "hidden";
	AttaqueM -= 5
}
else if (HPM3 == 0){
	document.getElementById("Monstre3").style.visibility = "hidden";
	AttaqueM -= 5
}
//Attaque des Monstres
randomCible = Math.floor(Math.random() * TabJoueur.length) + 1;
if (randomCible == 1){
	VieJ1 -= AttaqueM - ArmorJ1;
	VieJ1bis.innerHTML = VieJ1 ," Hp";
}
else if (randomCible == 2){
	VieJ2 -= AttaqueM - ArmorJ2;
	VieJ2bis.innerHTML = VieJ2 ," Hp";
}
else if (randomCible == 3){
	VieJ3 -= AttaqueM - ArmorJ3;
	VieJ3bis.innerHTML = VieJ3 ," Hp";
}
else if (randomCible == 4){
	VieJ4 -= AttaqueM - ArmorJ4;
	VieJ4bis.innerHTML = VieJ4 ," Hp";
}
VieJ1bis.innerHTML = VieJ1 ," Hp";
VieJ2bis.innerHTML = VieJ2 ," Hp";
VieJ3bis.innerHTML = VieJ3 ," Hp";
VieJ4bis.innerHTML = VieJ4 ," Hp";
tour += 1
}

//Condition de défaite
if (VieJ1 != 0 && VieJ2 != 0 && VieJ3 != 0 && VieJ4 !=0) {
	document.write("Vous avez perdu");
}

//Condition de victoire
else if (VieM1 != 0 && VieM2 != 0 && VieM3 != 0) {
	document.write("Vous avez gagné");
}