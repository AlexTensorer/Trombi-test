
// les controlleurs ont pour objectif de réagir à une route, puis de rassembler les données à envoyer à la vue


const mainController = {

    homePage(req, res) {
        res.render('home')


        
    }
}

module.exports = mainController;
