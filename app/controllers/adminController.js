const dataMapper = require('../dataMapper')

const adminController = {
    

    async addStudent(req, res) {
        try {
            const result = await dataMapper.findAllPromos();
            res.render('add_student', {
                promos: result
            });
        } catch (error) {
            console.trace(error);
            res.status(500).send('Error on addStudent');
        }
    },

    async submitNewStudent(req, res) {
        try {
            const result = await dataMapper.addStudent();
            res.render('addStudentConfirmation', {
                added: result
            });
        } catch (error) {
            console.trace(error);
            res.status(500).send('Error on submitNewStudent')
        }
    }
};



module.exports = adminController

