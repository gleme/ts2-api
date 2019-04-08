// @flow

const { Person, Gender } = require('./person');
const { MedicalSpecialty } = require('./medical-specialty');

class Physician extends Person {
    crm: string;
    specialties: MedicalSpecialty[];

    constructor(
        cpf: number,
        name: string,
        birthDate: Date,
        gender: Gender,
        phone: string,
        address: string,
        crm: string,
        specialties: MedicalSpecialty[]
    ) {
        super(cpf, name, birthDate, gender, address, phone);
        this.crm = crm;
        this.specialties = specialties;
    }
}

module.exports = {
    Physician: Physician
};
