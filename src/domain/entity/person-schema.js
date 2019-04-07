const { EntitySchema } = require('typeorm');
const { Person } = require('../model/person');

module.exports = new EntitySchema({
    name: 'Person',
    target: Person,
    columns: {
        cpf: {
            primary: true,
            type: 'int',
            width: 11
        },
        name: {
            type: 'varchar',
            length: 127
        },
        birthDate: {
            type: 'date'
        },
        gender: {
            type: 'varchar',
            length: 127
        },
        phone: {
            type: 'int',
            width: 15
        },
        createdAt: {
            type: 'timestamp',
            createDate: true
        },
        updatedAt: {
            type: 'timestamp',
            updateDate: true
        }
    }
});
