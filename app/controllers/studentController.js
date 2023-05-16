// on récupère les données du json
// const students = require('../../data/students.json');
// const promos = require('../../data/promos.json');

const dataMapper = require("../dataMapper");



const studentController = {

    async studentList(req, res) {

        //     // on récupère l'id passé dans l'url
        //     const promoId = req.params.id;
        //     // on filtre les données du json, pour trouver les entrées qui possède le promoId passé en paramètre
        //     const result = students.filter(e => e.promo == promoId);
        //    // on récupère le nom de la promo
        //     const promo = promos.find(e => e.id == promoId)
        //     // on envoie la vue avec les données
        //     res.render('studentList', {students: result, promoName: promo.name})

        // EXERCICE : Compléter cette méthode qui a pour objectif de récupérer la liste d'étudiants qui appartiennent à la promo envoyée en paramètres
        // ce code doit utiliser try catch ainsi que async et await

        // détails : 
        // 1 on récupère l'id passé dans req
        const promoId = req.params.id;
        // 2 on prépare une requête avec des informations propres à ce qu'on veut (utiliser l'id récupéré)
        
        try  {

            // on appelle le dataMapper qui est chargé de faire une requête SQL auprès de notre BDD postgresql dans laquelle on retrouvera les données quoi nous serviront dans la vue
            const promoResult = await dataMapper.findStudentsByPromo(promoId);

            res.render('studentList', {
                studentList: promoResult.rows,
            })
        
        } catch (error) { //  on prévoit un catch(error)
            console.log(error);
            res.status(500).send('Error on promoList');
        }
    }
}

module.exports = studentController;
