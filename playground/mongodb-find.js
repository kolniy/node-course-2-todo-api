const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to Mongo Server');
    }
    console.log('Connected to Mongo Server Successfully')


    //  db.collection('Todos').find({
    //      _id : new ObjectID('5c7d1438d7ceae2396c9e072')
    //  }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined, 2));
    //  }, (err) => {
    //      if(err){
    //          console.log('Unable to get Todos', err);
    //     
    //      }
    //  });

    // db.collection('Todos').find().count().then((count) => {
    //    console.log(`Todos count: ${count}`);
    // }, (err) => {
    //         console.log('Unable to get counts', err);
    // });

    db.collection('Users').find({name:'abishag olaniyi'}).toArray().then((users) => {
        console.log('Users');
        console.log(JSON.stringify(users,undefined, 2));
    }, (err) => {
        console.log(err);
    })

    //  db.close();

});