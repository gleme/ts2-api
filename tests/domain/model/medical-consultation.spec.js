const { expect } = require('chai');
const { MedicalConsultation } = require('../../../src/domain/model/medical-consultation');
const {
    givenMedicalProcedures,
    givenPatient,
    givenPhysician
} = require('../../helpers/mock.helpers');

describe('MedicalConsultation', () => {
    describe('smoke tests', () => {
        it('should exist MedicalConsultation constructor', () => {
            expect(MedicalConsultation).to.be.a('function');
        });
    });
    context('Valid data', () => {
        let patient = null;
        let physician = null;
        let procedures = null;
        beforeEach(() => {
            physician = givenPhysician();
            patient = givenPatient();
            procedures = givenMedicalProcedures();
        });

        describe('contructor', () => {
            it('should create a new instance of a MedicalConsultation', () => {
                const consultation = new MedicalConsultation(
                    new Date(),
                    'Tomar duas doses diarias de remedios',
                    patient,
                    physician
                );
                expect(consultation).to.be.an.instanceOf(MedicalConsultation);
            });
        });
    });
});
