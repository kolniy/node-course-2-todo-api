const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to Mongo Server');
    }
    console.log('Connected to Mongo Server Successfully')

    // //delete many
    // db.collection('Todos').deleteMany({text:'Eat more lunch'}).then((result) => {
    //     console.log(result);
    // })

    // Delete One
    // db.collection('Todos').deleteOne({text:'Eat more lunch'}).then((result) => {
    //     console.log(result);
    // })

    // find one and delete method
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
    //     console.log(result);
    // })

    //deleting users with name abishag olaniyi
    // db.collection('Users').deleteMany({name:'abishag olaniyi'}).then((result) => {
    //     console.log(result);
    // })

    // deleting user with id 5c7d097ed5d12c4eec191c8f
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5c7d097ed5d12c4eec191c8f')
    }).then((result) => {
        console.log(result);
    })
      
    //  db.close();

});