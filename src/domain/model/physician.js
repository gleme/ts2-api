const { Person } = require('./person');
const { MedicalSpecialty } = require('./medical-specialty');

class Physician extends Person {
    crm: string;
    specialties: MedicalSpecialty[];

    constructor(cpf: number, name: string, crm: string, specialties: MedicalSpecialty[]) {
        super(cpf, name);
        this.crm = crm;
        this.specialties = specialties;
    }
}

module.exports = {
    Physician: Physician
};
