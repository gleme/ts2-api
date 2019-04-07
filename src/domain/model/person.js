// @flow

const GENDER = Object.freeze({
    MALE: 'M',
    FEMALE: 'F',
    NA: 'N/A',
});

type Gender = $Values<typeof GENDER>;

class Person {

    cpf: number;
    name: string;
    birthDate: Date;
    gender: Gender;
    address: string;
    phone: string;

    constructor(cpf: number, name: string) {
        this.cpf = cpf;
        this.name = name;
    }
}

module.exports = {
    Person: Person,
};