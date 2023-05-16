// on récupère les données
const dataMapper = require('../dataMapper');


const promoController = {

        async promoList(req, res) {
            try {
                const result = await dataMapper.findAllPromos();
                res.render('promo', {
                    promos: result
                });
            } catch (error) {
                console.trace(error);
                res.status(500).send('Error on promoList');
            }
        },

        async promoDetail(req, res, next) {

            // 1 on récupère la valeur du paramètre de la route
            const promoId = req.params.id;
            try {
                // 2 on appelle le dataMapper
                const foundPromo = await dataMapper.findOnePromo(promoId);
                console.log("FOUNDPROMO", foundPromo);
                if (foundPromo) {
                    // 3 on envoie l'entrée trouvée à la vue
                    res.render('promoDetail', {
                        promo: foundPromo
                    });
                } else {
                    // si on a pas de résultat, on utilise next, pour sortir du controlleur, et arriver sur notre page 'erreur'
                    next(); 
                }
            } catch (e) {
                console.trace(e);
                res.status(500).send('Error on promoDetail');

            }
        }
    }

        module.exports = promoController;