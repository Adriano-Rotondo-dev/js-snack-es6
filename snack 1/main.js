//* creo l'array di oggetti con proprietà nome e peso
let bycicles = [
  { nome: "Bianchi Oltre XR4", peso: 6.8 },
  { nome: "Cannondale SuperSix EVO", peso: 7.2 },
  { nome: "Specialized Tarmac SL7", peso: 6.7 },
  { nome: "Trek Émonda SLR", peso: 6.9 },
  { nome: "Giant TCR Advanced SL", peso: 7.1 },
  { nome: "Scott Addict RC", peso: 7.0 },
  { nome: "Cervélo R5", peso: 6.8 },
  { nome: "Pinarello Dogma F", peso: 6.9 },
  { nome: "Wilier Zero SLR", peso: 6.6 },
  { nome: "Colnago V4Rs", peso: 6.8 },
];
//* imposto la variabile della prima bici come punto di confronto
let lightWeight = bycicles[0];
//* inizializzo il ciclo for per scorrere dentro l'array
for (let i = 0; i < bycicles.length; i++) {
  //* setto la condizione di comparazione del peso dell'elemento rispetto alla variabile
  if (bycicles[i].peso < lightWeight) {
    //* quando l'elemento è inferiore alla variabile, viene assegnato quel valore
    lightWeight = bycicles[i].peso;
  }
}
//* stampo in console il risultato
console.log(lightWeight);
