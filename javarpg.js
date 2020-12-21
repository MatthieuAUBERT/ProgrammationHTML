var Attaque = document.getElementById('Attaque');
var VieM1 = document.getElementById('HPM1');
var HPM1 = 100 ;
var HPM2 = 100 ;
var HPM3 = 100 ;
var VieJ1 = 100 ;
var VieJ2 = 80 ;
var VieJ3 = 90 ;
var VieJ4 = 120 ;
var AttaqueM = 10 ;
var AttaqueJ1 = 15 ;
var AttaqueJ2 = 5 ;
var AttaqueJ3 = 5 ;
var AttaqueJ4 = 20 ;
VieM1.innerHTML = "Monstre A : ", HPM1 ," Hp";

document.getElementById("Monstre1").addEventListener("mouseover", Bulle1Over);
document.getElementById("Monstre1").addEventListener("mouseout", Bulle1Out);

function Bulle1Over() {
  document.getElementById("Bulle1").style.visibility= "visible" ;
}

function Bulle1Out() {
  document.getElementById("Bulle1").style.visibility = "hidden" ;
}



function Att(Perso) {
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