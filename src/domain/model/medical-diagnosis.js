// @flow
const { Symptom } = require('./symptom');

class Category {
    code: string;
    description: string;

    constructor(code: string, description: string) {
        this.code = code;
        this.description = description;
    }
}

class MedicalDiagnosis {
    code: string;
    description: string;
    category: Category;
    symptoms: Symptom[];

    constructor(code: string, description: string, category: Category, symptoms: Symptom[]) {
        this.code = code;
        this.description = description;
        this.category = category;
        this.symptoms = symptoms;
    }
}

module.exports = {
    MedicalDiagnosis,
    Category
};
