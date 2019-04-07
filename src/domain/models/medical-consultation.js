// @flow
const { Physician } = require('./physician');
const { Patient } = require('./patient');
const { MedicalProcedure } = require('./medical-procedure');

class MedicalConsultation {

    protocol: number;
    date: Date;
    prescription: string;
    patient: Patient;
    physician: Physician;
    procedures: MedicalProcedure[];

    constructor(protocol: number, date: Date, prescription: string, patient: Patient, physician: Physician) {
        this.protocol = protocol;
        this.date = date;
        this.prescription = prescription;
        this.patient = patient;
        this.physician = physician;
    }
}

module.exports = {
    MedicalConsultation: MedicalConsultation,
};
