//* creo un array di oggetti di squadre di calcio con proprietà nome, punti fatti, falli subiti
//! compilo solo il nome, setto le altre a 0

let soccerTeams = [
  { nome: "Biancavilla", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Smeraldopoli", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Plumbeopoli", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Celestopoli", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Aranciopoli", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Lavandonia", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Azzurropoli", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Fucsiapoli", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Zafferanopoli", puntiFatti: 0, falliSubiti: 0 },
];

// todo: genero numeri random al posto degli 0
// todo: creo un nuovo array i cui elementi contengono solo nomi e falli subiti
let soccerTeamsFouls = [];
for (let i = 0; i < soccerTeams.length; i++) {
  soccerTeams[i].puntiFatti = Math.floor(Math.random() * 20) + 1;
  soccerTeams[i].falliSubiti = Math.floor(Math.random() * 30) + 1;
  soccerTeamsFouls.push({
    nome: soccerTeams[i].nome,
    falliSubiti: soccerTeams[i].falliSubiti,
  });
}
//* stampo in console
//console.log(soccerTeams);
console.log(soccerTeamsFouls);
