//Variables pour les boutons
var Attaque = document.getElementById('Attaque');
var Defense = document.getElementById('Défense');
var Special = document.getElementById('Spécial');

//Variables Caractéristiques des monstres
var VieM1 = document.getElementById('HPM1');
var VieM2 = document.getElementById('HPM2');
var VieM3 = document.getElementById('HPM3');
var HPM1 = 100 ;
var HPM2 = 100 ;
var HPM3 = 100 ;
var AttaqueM = 10 ;

//Variables Vie des joueurs
var VieJ1 = 100 ;
var VieJ1bis = document.getElementById('PV1');
var VieJ2 = 80 ;
var VieJ2bis = document.getElementById('PV2');
var VieJ3 = 90 ;
var VieJ3bis = document.getElementById('PV3');
var VieJ4 = 120 ;
var VieJ4bis = document.getElementById('PV4');

//Variables Mana des joueurs
var Mana1 = 20;
var ManaJ1 = document.getElementById('Mana1');
var Mana2 = 40;
var ManaJ2 = document.getElementById('Mana2');
var Mana3 = 50;
var ManaJ3 = document.getElementById('Mana3');
var Mana4 = 10;
var ManaJ4 = document.getElementById('Mana4');

//Variables Attaque des joueurs
var AttaqueJ1 = 15 ;
var AttaqueJ2 = 5 ;
var AttaqueJ3 = 5 ;
var AttaqueJ4 = 20 ;

//Autres variables utiles au bon déroulement du jeu
var Cible = 0;
var tour = 0;
var Dialogue = document.getElementById('Dialogue');
const TabJoueur = [1,2,3,4]
var randomCible = 0


//Info-Bulles (ne fonctionne pas??)
document.getElementById("Monstre1").onmouseover = function() {
  document.getElementById("Bulle1").style.visibility= "visible" ;
}

document.getElementById("Monstre1").onmouseout = function() {
  document.getElementById("Bulle1").style.visibility = "hidden" ;
}

document.getElementById("Monstre2").onmouseover = function() {
  document.getElementById("Bulle2").style.visibility= "visible" ;
}

document.getElementById("Monstre2").onmouseout = function() {
  document.getElementById("Bulle2").style.visibility = "hidden" ;
}

document.getElementById("Monstre3").onmouseover = function() {
  document.getElementById("Bulle3").style.visibility= "visible" ;
}

document.getElementById("Monstre3").onmouseout = function() {
  document.getElementById("Bulle3").style.visibility = "hidden" ;
}

//Prise de la cible via click
document.getElementById("Monstre1").onclick = function() {
	if HPM1 > 0 {
		Cible = 1;
	}
}

document.getElementById("Monstre2").onclick = function() {
	if HPM2 > 0 {
		Cible = 2;
	}
}

document.getElementById("Monstre3").onclick = function() {
	if HPM3 > 0 {
		Cible = 3;
	}
}

//Fonction Attaque permettant à l'appui du bouton d'initier l'attaque avec le personnage actif
function Att(Perso) {
	if (Perso == 0) {
		
}

//Fonction Défense permettant à l'appui de positionner le personnage en position défensive
function Def(Perso){
  
}

// Fonction Spéciale permettant d'utiliser la capacité spéciale du personnage actif
function Spe(Perso){
  
}

// Boucle du combat
while ((VieJ1 != 0 && VieJ2 != 0 && VieJ3 != 0 && VieJ4 !=0) || (VieM1 != 0 && VieM2 != 0 && VieM3 != 0)) {
  for i in range (0,4){
    if Attaque.onclick {
      Att(i);
    }
    else if Defense.onclick{
      Def(i);
    }
    else if Special.onclick{
      Spe(i);
    }
  }
VieM1.innerHTML = "Monstre A : ", HPM1 ," Hp";
VieM2.innerHTML = "Monstre B : ", HPM2 ," Hp";
VieM3.innerHTML = "Monstre C : ", HPM3 ," Hp";
randomCible = Math.floor(Math.random() * TabJoueur.length) + 1;
if (randomCible == 1){
	VieJ1 -= AttaqueM ;
	VieJ1bis.innerHTML = VieJ1 ," Hp";
}
else if (randomCible == 2){
	VieJ2 -= AttaqueM ;
	VieJ2bis.innerHTML = VieJ2 ," Hp";
}
else if (randomCible == 3){
	VieJ3 -= AttaqueM ;
	VieJ3bis.innerHTML = VieJ3 ," Hp";
}
else if (randomCible == 4){
	VieJ4 -= AttaqueM ;
	VieJ4bis.innerHTML = VieJ4 ," Hp";
}
}

if (VieJ1 != 0 && VieJ2 != 0 && VieJ3 != 0 && VieJ4 !=0) {
	document.write("Vous avez perdu");
}

else if (VieM1 != 0 && VieM2 != 0 && VieM3 != 0) {
	document.write("Vous avez gagné");
}