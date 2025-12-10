/*
 Se XP for menor do que 1.000 = Ferro
 Se XP for entre 1.001 e 2.000 = Bronze
 Se XP for entre 2.001 e 5.000 = Prata
 Se XP for entre 5.001 e 7.000 = Ouro
 Se XP for entre 7.001 e 8.000 = Platina
 Se XP for entre 8.001 e 9.000 = Ascendente
 Se XP for entre 9.001 e 10.000= Imortal
 Se XP for maior ou igual a 10.001 = Radiante
*/

const XP = 10001;

function validateXp(XP) {
  if (XP <= 1000) console.log("Ferro");
  if (XP > 1000 && XP <= 2000) console.log("Bronze");
  if (XP > 2000 && XP <= 5000) console.log("Prata");
  if (XP > 5000 && XP <= 7000) console.log("Ouro");
  if (XP > 7000 && XP <= 8000) console.log("Platina");
  if (XP > 8000 && XP <= 9000) console.log("Ascendente");
  if (XP > 9000 && XP <= 10000) console.log("Imortal");
  if (XP > 10000 && XP <= 11000) console.log("Radiante");

  return;
}

validateXp(XP);
