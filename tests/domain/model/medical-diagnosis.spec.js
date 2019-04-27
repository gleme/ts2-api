const { expect } = require('chai');
const { MedicalDiagnosis, Category } = require('../../../src/domain/model/medical-diagnosis');
const { Symptom } = require('../../../src/domain/model/symptom');

describe('MedicalDiagnosis', () => {
    describe('smoke tests', () => {
        it('should exist MedicalDiagnosis constructor', () => {
            expect(MedicalDiagnosis).to.be.a('function');
        });
    });
    context('Valid data', () => {
        let symptoms = null;
        let category = null;
        beforeEach(() => {
            symptoms = [
                new Symptom('erupções de pele'),
                new Symptom('diarreia'),
                new Symptom('febre alta'),
                new Symptom('tosse persistente')
            ];
            category = new Category('B050', 'Sarampo');
        });

        describe('contructor', () => {
            it('should create a new instance of a MedicalDiagnosis', () => {
                const diagnosis = new MedicalDiagnosis(
                    'B051',
                    'Sarampo complicado por meningite',
                    category,
                    symptoms
                );
                expect(diagnosis).to.be.an.instanceOf(MedicalDiagnosis);
            });
        });
    });
});