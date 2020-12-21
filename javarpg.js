var Attaque = document.getElementById('Attaque');
var Defense = document.getElementById('Défense');
var Special = document.getElementById('Spécial');

var VieM1 = document.getElementById('HPM1');
var VieM2 = document.getElementById('HPM2');
var VieM3 = document.getElementById('HPM3');

var HPM1 = 100 ;
var HPM2 = 100 ;
var HPM3 = 100 ;
var AttaqueM = 10 ;

var VieJ1 = 100 ;
var VieJ2 = 80 ;
var VieJ3 = 90 ;
var VieJ4 = 120 ;

var Mana1 = 20;
var Mana2 = 40;
var Mana3 = 50;
var Mana4 = 10;

var AttaqueJ1 = 15 ;
var AttaqueJ2 = 5 ;
var AttaqueJ3 = 5 ;
var AttaqueJ4 = 20 ;

var Cible = 0;

VieM1.innerHTML = "Monstre A : ", HPM1 ," Hp";


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

function Att(Perso) {
	if (Perso == 1) {
}

function Def(Perso){
  
}

function Spe(Perso){
  
}

while ((VieJ1 != 0) or (VieM1 != 0)) {
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