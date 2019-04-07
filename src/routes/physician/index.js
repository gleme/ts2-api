const express = require('express');
const router = express.Router();
const { Physician } = require('../../domain/model/physician');
const { injectRepository } = require('../../middlewares/repository');
const specialtyRouter = require('./medical-specialty');

router.use('/specialty', specialtyRouter);

router.all('*', injectRepository(Physician));

router.get('/', async (req, res, next) => {
    try {
        const physicians = await req.app.locals.repository.find();
        res.status(200).json(physicians);
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const { cpf, name, crm, specialties } = req.body;
        const physician = new Physician(cpf, name, crm, specialties);
        await req.app.locals.repository.save(physician);
        res.status(200).end();
    } catch (error) {
        next(error);
    }
});

router.put('/:cpf', async (req, res, next) => {
    try {
        const { cpf } = req.params;
        const { name, specialties } = req.body;
        res.status(204).end();
    } catch (error) {
        next(error);
    }
});

module.exports = router;
