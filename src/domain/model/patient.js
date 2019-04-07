// @flow

const { Person } = require('./person');
const { MedicalConsultation } = require('./medical-consultation');

class Patient extends Person {
    email: string;
    consultations: MedicalConsultation[];

    constructor(cpf: number, name: string, email: string) {
        super(cpf, name);
        this.email = email;
    }
}

module.exports = {
    Patient: Patient
};
