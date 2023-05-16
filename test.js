const client = require('./app/database');



const requete = 'SELECT * FROM student;'

// client.query permet de faire une requête à PSQL, le callback sera déclenché lorsque le résultat sera arrivé
// en effet, vu que SQL est dissocié du JS, si on ne l'explique pas au code, il ne saura pas attendre la réponse de la BDD
client.query(requete, (error, result) => {
    // dans ce callback, on est dans la situation où le résultat est arrivé, à moins qu'une erreur ait eu lieu
    // dans ce callback, on reçoit 2 paramètres : 
    // Position 1: ereur potentiel
    // position 2 : résultat
    if (error) {
        // on indique à la console qu'il y a eu un problème
        // afin d'avoir plus de détails sur l'erreur, au lieu de faire un console.log, on peut faire un console.trace
        console.trace(error);
    } else {
        console.log(result.rows);
    }
});










  // promise - utilisation de then
// utilisation de then et catch, sucre syntaxique permettant de gérer les erreur de manières + lisibile, mais cette syntaxe est maintenant souvent remplacée par "await"


  const query1 = 'SELECT NOW() as now';

  client.query(query).then(result => console.log(result.rows[0])) // la méthode 'then' permet de réagir à la réponse de la requête
.catch(error => console.error(error.stack))

const query2 = 'SELECT NOW() as now';

// syntaxe utilisant async await
// le fait d'utiliser le mot clé async, va permettre d'utiliser await
async function test(req, res) {
    
    try { // try a pour objectif de tout exécuter à moins qu'une erreur ait lieu, dans lequel cas, l'exécution s'arrête et rendre dans le catch
        const result = await client.query(query2); // on attend la réponse 
        res.render('promo', {promos: result.rows})
    } catch(error) { // on regroupe la gestion d'erreur, en "attrappant" toutes les erreurs qui peuvent avoir lieu dans le try
        console.trace(error);
        res.render('error', {error});
    }
    console.log(result2);
    console.log(result3);
}