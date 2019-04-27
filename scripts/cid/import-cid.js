/**
 * Load Environment Variables
 */
require('dotenv').config();
const util = require('util');
const { MongoClient } = require('mongodb');
const async = require('async');
async.each = util.promisify(async.each);
const { URI, database } = require('../../src/config/mongo.config');
const sourceConfig = require('./source.config');
const { MedicalDiagnosis } = require('../../src/domain/model/medical-diagnosis');
const { Symptom } = require('../../src/domain/model/symptom');

(async () => {
    try {
        const destClient = new MongoClient(URI, { useNewUrlParser: true });
        await destClient.connect();
        console.log('connected to destination database');
        const destDb = destClient.db(database);

        const sourceClient = new MongoClient(sourceConfig.URI, { useNewUrlParser: true });
        await sourceClient.connect();
        console.log('connected to source database');
        const sourceDb = sourceClient.db(sourceConfig.database);

        /**
         * Develop transformation script
         */
        const subCategories = await sourceDb
            .collection('SubCategory')
            .find({})
            .toArray();

        // assembly this structure to mongodb
        const diagnosis = {
            code: 'A000',
            description: 'dadeade',
            category: {
                code: 'A00',
                description: 'Cholera'
            },
            info: 'information about CID10',
            symptoms: ['symptom 1', 'symptom 2', 'symptom 3']
        };

        /**
         * Close connections
         */
        destClient.close();
        sourceClient.close();
    } catch (error) {
        console.error(error.stack);
        throw error;
    }
})();
