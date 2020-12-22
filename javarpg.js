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


//Prise de la cible via click
document.getElementById("Monstre1").onclick = function() {
	if (HPM1 > 0) {
		Cible = 1;
	}
}

document.getElementById("Monstre2").onclick = function() {
	if (HPM2 > 0) {
		Cible = 2;
	}
}

document.getElementById("Monstre3").onclick = function() {
	if (HPM3 > 0) {
		Cible = 3;
	}
}

//Fonction Attaque permettant à l'appui du bouton d'initier l'attaque avec le personnage actif
function Att(Perso) {
	if (Perso == 0) {
		Dialogue.innerHTML = "Eleven attaque !";
		if (Cible == 1){
			HPM1 -= AttaqueJ1;
		}
		 else if (Cible == 2){
			HPM2 -= AttaqueJ1;
		}
		else if (Cible == 3){
			HPM3 -= AttaqueJ1;
		}
	}
	else if (Perso == 1) {
		Dialogue.innerHTML = "Séréna attaque !";
		if (Cible == 1){
			HPM1 -= AttaqueJ2;
		}
		 else if (Cible == 2){
			HPM2 -= AttaqueJ2;
		}
		else if (Cible == 3){
			HPM3 -= AttaqueJ2;
		}
	}
	else if (Perso == 2) {
		Dialogue.innerHTML = "Théo attaque !";
		if (Cible == 1){
			HPM1 -= AttaqueJ3;
		}
		 else if (Cible == 2){
			HPM2 -= AttaqueJ3;
		}
		else if (Cible == 3){
			HPM3 -= AttaqueJ3;
		}
	}
	else if (Perso == 3) {
		Dialogue.innerHTML = "Jade attaque !";
		if (Cible == 1){
			HPM1 -= AttaqueJ4;
		}
		 else if (Cible == 2){
			HPM2 -= AttaqueJ4;
		}
		else if (Cible == 3){
			HPM3 -= AttaqueJ4;
		}
	}
}


//Fonction Défense permettant à l'appui de positionner le personnage en position défensive
function Def(Perso){
	if (Perso == 0){
		Dialogue.innerHTML = "Eleven se défend";
		ArmorJ1 = 8;
	}
	else if (Perso == 1){
		Dialogue.innerHTML = "Séréna se défend";
		ArmorJ2 = 5;
	}
	else if (Perso == 2){
		Dialogue.innerHTML = "Théo se défend";
		ArmorJ3 = 6;
	}
	else if (Perso == 3){
		Dialogue.innerHTML = "Jade se défend";
		ArmorJ4 = 6;
	}
}

// Fonction Spéciale permettant d'utiliser la capacité spéciale du personnage actif
function Spe(Perso){
  if (Perso == 0 && Mana1 != 0) {
	Dialogue.innerHTML = "COUPE CLAIRE !"
	if (Cible == 1){
		HPM1 -= AttaqueJ1 * 2;
	}
	else if (Cible == 2){
		HPM2 -= AttaqueJ1 * 2;
	}
	else if (Cible == 3){
		HPM3 -= AttaqueJ1 * 2;
	}
	Mana1 -= 5
  }
  else if (Perso == 1 && Mana2 != 0){
	Dialogue.innerHTML = "SOIN !"
	VieJ1 += 15;
	VieJ2 += 15;
	VieJ3 += 15;
	VieJ4 += 15;
	if (VieJ1 > 100){
		VieJ1 = 100;
	}
	else if (VieJ2 > 80){
		VieJ2 = 80;
	}
	else if (VieJ3 > 90){
		VieJ3 = 90;
	}
	else if (VieJ4 > 120){
		VieJ4 = 120;
	}
	Mana2 -= 10;
}
  else if (Perso == 2 && Mana3 != 0){
	   Dialogue.innerHTML = "MEGA-FLAMME ! ";
	   HPM1 -= 10;
	   HPM2 -= 10;
	   HPM3 -= 10;
	   Mana3 -= 25
   }
  else if (Perso == 3 && Mana4 != 0){
	   Dialogue.innerHTML = "MULTI-COUP !"
	   if (Cible == 1){
		HPM1 -= AttaqueJ4 + (AttaqueJ4/2) + (AttaqueJ4/4) ;
		}
		else if (Cible == 2){
		HPM2 -= AttaqueJ4 + (AttaqueJ4/2) + (AttaqueJ4/4)  ;
		}
		else if (Cible == 3){
		HPM3 -= AttaqueJ4 + (AttaqueJ4/2) + (AttaqueJ4/4);
		}
	Mana4 -= 5
   }
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