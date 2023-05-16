
// pgClient qui va être exporté a pour objectif d'être l'objet qui fait l'intermédiaire entre notre code et postgresql

// on récupère le client du module postgres
const { Client } = require('pg');


// on définit la connexion à la BDD
// l'adresse est consituée de cettez manière : 
// postgresql://nomUtilisateur:motDePasse@adresseBDD/nomDeLaBDD
const pgClient = new Client('postgresql://trombi:trombi@localhost/trombi')

// on lance la connexion à la BDD
pgClient.connect();


// on exporte le client
module.exports = pgClient;