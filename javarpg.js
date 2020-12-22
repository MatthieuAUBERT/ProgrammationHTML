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
var VieJ2 = 80 ;
var VieJ3 = 90 ;
var VieJ4 = 120 ;

//Variables Mana des joueurs
var Mana1 = 20;
var Mana2 = 40;
var Mana3 = 50;
var Mana4 = 10;

//Variables Attaque des joueurs
var AttaqueJ1 = 15 ;
var AttaqueJ2 = 5 ;
var AttaqueJ3 = 5 ;
var AttaqueJ4 = 20 ;

//Autres variables utiles au bon déroulement du jeu
var Cible = 0;
var tour = 0;
var Dialogue = document.getElementById

VieM1.innerHTML = "Monstre A : ", HPM1 ," Hp";
VieM2.innerHTML = "Monstre B : ", HPM1 ," Hp";
VieM3.innerHTML = "Monstre C : ", HPM1 ," Hp";

//Info-Bulles (ne fonctionne pas??)
document.getElementById("Monstre1").onmouseover = function() {
  document.getElementById("Bulle1").style.visibility= "visible" 
}

document.getElementById("Monstre1").onmouseout = function() {
  document.getElementById("Bulle1").style.visibility = "hidden" 
}

document.getElementById("Monstre2").onmouseover = function() {
  document.getElementById("Bulle2").style.visibility= "visible" 
}

document.getElementById("Monstre2").onmouseout = function() {
  document.getElementById("Bulle2").style.visibility = "hidden" 
}

document.getElementById("Monstre3").onmouseover = function() {
  document.getElementById("Bulle3").style.visibility= "visible" 
}

document.getElementById("Monstre3").onmouseout = function() {
  document.getElementById("Bulle3").style.visibility = "hidden" 
}

//Prise de la cible via click
document.getElementById("Monstre1").onclick = function() {
	if HPM1 > 0 {
		Cible = 1
	}
}

document.getElementById("Monstre2").onclick = function() {
	if HPM2 > 0 {
		Cible = 2
	}
}

document.getElementById("Monstre3").onclick = function() {
	if HPM3 > 0 {
		Cible = 3
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
      Att(i)
    }
    else if Defense.onclick{
      Def(i)
    }
    else if Special.onclick{
      Spe(i)
    }
  }
}

if (VieJ1 != 0 && VieJ2 != 0 && VieJ3 != 0 && VieJ4 !=0) {
	document.write("Vous avez perdu")
}

else if (VieM1 != 0 && VieM2 != 0 && VieM3 != 0) {
	document.write("Vous avez gagné")
}