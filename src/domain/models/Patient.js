// @flow

const { Person } = require('./person');
const { MedicalConsultation } = require('./medical-consultation');

class Patient extends Person {
  consultations: MedicalConsultation[];

  constructor(cpf: number, name: string) {
    super(cpf, name);
  }

}

module.exports = {
    Patient: Patient,
};