// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to Mongo Server');
    }
    console.log('Connected to Mongo Server Successfully')


     db.collection.find().toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined, 2));
     }, (err) => {
         if(err){
             console.log('There was an error');
             console.log(err);
         }
     });
    // db.collection('Todos').insertOne({
    //     text : 'something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops,undefined,2));
    // })

    // // db.collection('Users').insertOne({
    // //     name: 'abishag olaniyi',
    // //     age: 23,
    // //     location: 'Maitama, Abuja'
    // // }, (err, result) => {
    // //     if(err){
    // //         return console.log('Unable to insert user');
    // //     }
    // //     console.log(result.ops[0]._id.getTimestamp());
    // // })

    db.close();

});