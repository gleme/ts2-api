// @flow
const { Symptom } = require('./symptom');

class MedicalDiagnosis {
    code: string;
    description: string;
    symptoms: Symptom[];

    constructor(code: string, description: string, symptoms: Symptom[]) {
        this.code = code;
        this.description = description;
        this.symptoms = symptoms;
    }
}

module.exports = {
    MedicalDiagnosis: MedicalDiagnosis
};
