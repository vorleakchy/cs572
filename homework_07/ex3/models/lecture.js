const MongoClient = require('mongodb').MongoClient;
const dbUrl = 'mongodb://localhost:27017';
const dbName = 'homework07';
const dbCollection = 'lectures';
const ObjectID = require('mongodb').ObjectID;

class Lecture {
    static all(callback) {
        MongoClient.connect(dbUrl, {useNewUrlParser: true}, (err, client) => {
            const db = client.db(dbName);
            const collection = db.collection(dbCollection);

            collection.find({}).toArray((err, result) => {
                client.close();
                callback(result); 
            });
        });
    }

    static findById(id, callback) {
        MongoClient.connect(dbUrl, {useNewUrlParser: true}, (err, client) => {
            const db = client.db(dbName);
            const collection = db.collection(dbCollection);

            collection.findOne(new ObjectID(id), (err, result) => {
                client.close();
                callback(result); 
            });
        });
    }

    static create(lecture, callback) {
        MongoClient.connect(dbUrl, {useNewUrlParser: true}, (err, client) => {
            const db = client.db(dbName);
            const collection = db.collection(dbCollection);

            collection.insertOne(lecture, (err, result) => {
                client.close();
                callback(result.ops[0]); 
            });
        });
    }

    static update(id, lecture, callback) {
        MongoClient.connect(dbUrl, {useNewUrlParser: true}, (err, client) => {
            const db = client.db(dbName);
            const collection = db.collection(dbCollection);
            const query = {_id: new ObjectID(id)};
            const newValues = { $set: lecture };
            
            collection.updateOne(query, newValues, (err, result) => {
                client.close();
                callback(); 
            });
        });
    }

    static delete(id, callback) {
        MongoClient.connect(dbUrl, {useNewUrlParser: true}, (err, client) => {
            const db = client.db(dbName);
            const collection = db.collection(dbCollection);

            collection.deleteOne({_id: new ObjectID(id)}, (err, result) => {
                client.close();
                callback(); 
            });
        });
    }

    static search(q, callback) {
        MongoClient.connect(dbUrl, {useNewUrlParser: true}, (err, client) => {
            const db = client.db(dbName);
            const collection = db.collection(dbCollection);
            const query = { lecture: q };

            collection.find(query).toArray((err, result) => {
                client.close();
                callback(result); 
            });
        });
    }
}

module.exports = Lecture;