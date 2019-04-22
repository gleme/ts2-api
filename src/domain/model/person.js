// @flow
const isValidCPF = require('@fnando/cpf/dist/node').isValid;

const GENDER = Object.freeze({
    MALE: 'M',
    FEMALE: 'F',
    NA: 'N/A'
});

export type Gender = $Values<typeof GENDER>;

class Person {
    cpf: number;
    name: string;
    birthDate: Date;
    gender: Gender;
    address: string;
    phone: number;

    constructor(
        cpf: number,
        name: string,
        birthDate: Date,
        gender: Gender,
        address: string,
        phone: number
    ) {
        this.cpf = cpf;
        this.name = name;
        this.birthDate = birthDate;
        this.gender = gender;
        this.address = address;
        this.phone = phone;
    }

    set cpf(value) {
        if (!isValidCPF(value)) throw new Error('Invalid CPF');
    }
}

module.exports = {
    Person: Person
};
