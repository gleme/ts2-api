// @flow

class Symptom {
    id: number;
    description: string;

    constructor(description: string) {
        this.description = description;
    }
}

module.exports = {
    Symptom: Symptom
};
