const express = require('express');
const { In } = require('typeorm');
const router = express.Router();
const { Physician } = require('../../domain/model/physician');
const { MedicalSpecialty } = require('../../domain/model/medical-specialty');
const { injectRepository } = require('../../middlewares/repository');
const specialtyRouter = require('./medical-specialty');
const { body, check, validationResult } = require('express-validator/check');

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

router.post('/', [
    check('cpf').not().isEmpty().withMessage('Cpf cannot be empty.'),
    check('name').not().isEmpty().withMessage('Name cannot be empty'),
    check('birthDate').not().isEmpty().withMessage('Birthdate cannot be empty.'),
    check('birthDate').custom(date => {
        var timestamp = Date.parse(date);
        if (isNaN(timestamp)) {
            throw new Error('Birthdate is not a valid Date.');
        }
        return true;
    }),
    check('gender').not().isEmpty().withMessage('Gender cannot be empty.'),
    check('address').not().isEmpty().withMessage('Address cannot be empty.'),
    check('phone').not().isEmpty().withMessage('Phone cannot be empty.'),
    check('crm').not().isEmpty().withMessage('Crm cannot be empty.'),
    check('specialties').custom(async (specialties, { req }) => {
        const specialtiesObj = await req.app.locals.mysqlDb.getRepository(MedicalSpecialty).find({
            where: {
                code: In(specialties.map(spec => spec.code))
            }
        });

        if(req.body.specialties.length != specialtiesObj.length) {
            throw new Error('One or more speciality was not recognized in database.');
        }
        
        return true;
    }),
], async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    try {
        const { cpf, name, birthDate, gender, address, phone, crm, specialties } = req.body;

        const specialtiesObj = await req.app.locals.mysqlDb.getRepository(MedicalSpecialty).find({
            where: {
                code: In(specialties.map(spec => spec.code))
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
