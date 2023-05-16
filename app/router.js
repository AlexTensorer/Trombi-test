
// ici on veut uniquement récupérer une partie des fonctionnalités trouvées dans le module express
// pour récupérer Router, il faut au préalable qu'un module se nomme comme ça dans le package express
const { Router } = require('express');
const adminController = require('./controllers/adminController');
const mainController = require('./controllers/mainController');
const promoController = require('./controllers/promoController');
const studentController = require('./controllers/studentController');
const dataMapper = require('./dataMapper');
const database = require('./database')

const router = Router();


router.get('/', mainController.homePage);
router.get('/promo/:id', promoController.promoDetail);
router.get('/promo/:id/students', studentController.studentList)
router.get('/promos', promoController.promoList);
router.get('/admin/addStudent', adminController.addStudent);

router.post('/add-action', (req,res) => {
    const userInput = req.body
    console.log(userInput)
    res.render('addStudentConfirmation', { addStudentInfo : userInput})
})


module.exports = router;