const { expect } = require('chai');
const { Symptom } = require('../../../src/domain/model/symptom');

describe('Symptom', () => {
    describe('smoke tests', () => {
        it('should exist Symptom constructor', () => {
            expect(Symptom).to.be.a('function');
        });
    });
    context('Valid data', () => {
        describe('contructor', () => {
            it('should create a new instance of a Symptom', () => {
                const symptom = new Symptom('dor de cabeça');
                expect(symptom).to.be.an.instanceOf(Symptom);
            });
        });
    });
});
