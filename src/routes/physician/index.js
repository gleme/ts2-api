const express = require('express');
const { In } = require('typeorm');
const router = express.Router();
const { Physician } = require('../../domain/model/physician');
const { MedicalSpecialty } = require('../../domain/model/medical-specialty');
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
        const { cpf, name, birthDate, gender, address, phone, crm, specialties } = req.body;
        const specialtiesObj = await req.app.locals.mysqlDb.getRepository(MedicalSpecialty).find({
            where: {
                id: In(specialties.map(spec => spec.code))
            }
        });
        const physician = new Physician(
            cpf,
            name,
            birthDate,
            gender,
            phone,
            address,
            crm,
            specialtiesObj
        );

        await req.app.locals.repository.save(physician);
        res.status(200).end();
    } catch (error) {
        next(error);
    }
});

router.get('/:cpf', async (req, res, next) => {
    try {
        const { cpf } = req.params;
        const physician = await req.app.locals.repository.findOne(cpf);
        res.status(200).json(physician);
    } catch (error) {
        next(error);
    }
});

// router.put('/:cpf', async (req, res, next) => {
//     try {
//         const { cpf } = req.params;
//         const { name, birthDate, gender, address, phone, crm, specialties } = req.body;
//         const specialtiesObj = await req.app.locals.mysqlDb.getRepository(MedicalSpecialty).find({
//             where: {
//                 id: In(specialties.map(spec => spec.code))
//             }
//         });

//         await req.app.locals.repository.update(cpf, {
//             name,
//             birthDate,
//             gender,
//             address,
//             phone,
//             crm,
//             specialties: specialtiesObj
//         });
//         res.status(204).end();
//     } catch (error) {
//         next(error);
//     }
// });

router.delete('/:cpf', async (req, res, next) => {
    try {
        const { cpf } = req.params;
        await req.app.locals.repository.delete(cpf);
        res.status(204).end();
    } catch (error) {
        next(error);
    }
});

module.exports = router;
