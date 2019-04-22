const {
    Person,
    Physician,
    Patient,
    MedicalSpecialty,
    MedicalProcedure
} = require('../../src/domain/model');

function givenPhysician() {
    return new Physician(
        38536211121,
        'Jorge da Silva',
        new Date(),
        'M',
        'Endereco desconhecido',
        1332321,
        '1321-SP',
        givenMedicalSpecialties
    );
}

function givenMedicalSpecialties() {
    return [new MedicalSpecialty('Obstetra')];
}

function givenPatient() {
    return new Patient(
        38536211121,
        'Jorge da Silva',
        new Date(),
        'M',
        'Endereco desconhecido',
        1332321,
        'email@domain.com'
    );
}

function givenMedicalProcedures() {
    return [
        new MedicalProcedure('Em pronto socorro'),
        new MedicalProcedure('Visita ou consulta hospitalar do médico assistente')
    ];
}

function givenInvalidPerson() {
    return new Person(111, 'Jorge da Silva', new Date(), 'M', 'Endereco desconhecido', 1332321);
}

module.exports = {
    givenInvalidPerson,
    givenPatient,
    givenPhysician,
    givenMedicalProcedures,
    givenMedicalSpecialties
};
