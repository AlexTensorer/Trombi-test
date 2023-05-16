
const client = require('./database');


// Le dataMapper sert à centraliser les requêtes à la BDD



const dataMapper = {

    findAllPromos: async function() {
        // on prépare la requête
        const query = 'SELECT * FROM promo;'
        const result = await client.query(query);
        return result.rows;
    },

    findStudentsByPromo: async function(promoId) {
        // on prépare une requête paramétrée
        const queryText = `SELECT * FROM student WHERE promo_id=$1`;
        const queryValues = [promoId];
        const result = await client.query(queryText, queryValues);
        // on renvoie la valeur au controlleur qui l'enverra ensuite dans la vue
        return result.rows;
    },  

    findOnePromo: async function(id) {
    
        // on prépare la requête
        // notre requête va être segmentée en 2 parties afin de créer une requête paramétrée qui permet de nous prémunir contre les injections SQL
        const queryText = `SELECT * FROM promo WHERE id = $1`;
        // chaque valeur dynamique de la requête va être remplacée par un $ suivi d'un nombre représentant la position à laquelle on va retrouver la valeur de ce paramètre
        // dans queryValues on retrouve un tableau dans lequel il y aura toutes les valeurs nécéssaires à l'exécution de la requête, on retrouvera à l'index 0 la valeur souhaitée pour $1, puis à l'index 1 la valeur souhaitée pour $2 etc ...
        const queryValues = [id];
        // on lance la requête en passant à client.query 2 variables : 
        // 1 la requête sans valeurs dynamiques à l'intérieur
        // 2 les valeurs à rajouter sur la requête
        const result = await client.query(queryText, queryValues);
        console.log(result);
        // on regarde nos résultats, et en fonction, on répond au controller
        if (result.rows.length > 0) {
            return result.rows[0];
        } else {
            return null
        }
    },

    addStudent(addstudentInfo) {
        return `INSERT INTO student(promo, first_name, last_name, github_username) VALUES('${addstudentInfo.promo}', '${addstudentInfo.first_name}', ${addstudentInfo.last_name}, ${addstudentInfo.github_username}')`;
    }
}


module.exports = dataMapper;
