const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const username = 'homework01';
const password = 'homework01';
const dbName = 'homework01';
const dbUrl = `mongodb://${username}:${password}@ds233806.mlab.com:33806/${dbName}`;

function sendDecryptedMessage(res) {
    MongoClient.connect(dbUrl, {useNewUrlParser: true}, (err, client) => {
        const db = client.db(dbName);
        const collection = db.collection('data');

        collection.findOne({}, (err, doc) => {
            const encryptor = require('simple-encryptor')(doc.key);
            const message = encryptor.decrypt(doc.message);

            res.status(200).send(message);
            
            client.close();
        });
    });
}

router.get('/secret', (req, res) => {
    sendDecryptedMessage(res);
});

module.exports = router;