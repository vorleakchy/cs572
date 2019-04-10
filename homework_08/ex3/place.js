const MongoClient = require('mongodb').MongoClient;
const dbUrl = 'mongodb://localhost:27017';
const dbName = 'homework08';
const dbCollection = 'places';

class Place {
    static create(places, callback) {
        MongoClient.connect(dbUrl, {useNewUrlParser: true}, (err, client) => {
            const db = client.db(dbName);
            const collection = db.collection(dbCollection);
            collection.createIndex({location: '2d'});

            collection.insertMany(places, (err, result) => {
                client.close();
                callback(); 
            });
        });
    }

    static search(options={}, callback) {
        MongoClient.connect(dbUrl, {useNewUrlParser: true}, (err, client) => {
            const db = client.db(dbName);
            const collection = db.collection(dbCollection);
            const currentLocation = [41.018067, -91.967291];
            const query = { category: options.category };

            if (options.name)
                query.name = options.name;
            else
                query.location = { $near: currentLocation };

            collection.find(query).limit(3).toArray((err, result) => {
                client.close();
                callback(result); 
            });
        });
    }
}

module.exports = Place;