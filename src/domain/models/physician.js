const { Person } = require('./person');
const { MedicalSpecialty } = require('./medical-specialty');

class Physician extends Person {

    crm: string;
    specialties: MedicalSpecialty[];

    constructor(crm: string, specialties: MedicalSpecialty[]) {
        this.crm = crm;
        this.specialties = specialties;
    }
}

module.exports = {
    Physician: Physician,
};