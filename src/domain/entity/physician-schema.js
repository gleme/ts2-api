const { EntitySchema } = require('typeorm');
const { Physician } = require('../model/physician');

module.exports = new EntitySchema({
    name: 'Physician',
    target: Physician,
    extends: 'Person',
    columns: {
        crm: {
            type: 'varchar',
            length: '15'
        }
    },
    relations: {
        specialties: {
            target: 'MedicalSpecialty',
            type: 'one-to-many'
        }
    }
});
