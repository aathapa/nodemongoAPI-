const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/', (error, db) => {
  if (error) {
    return console.log('Unable to connect mongo server');
  }
  console.log('Connected to mongo server');
  const dbo = db.db("TodoApp");

  // dbo.collection('Todo').find({completed: false}).toArray()
  //   .then(docs => console.log(JSON.stringify(docs,undefined,3)))
  //   .catch(e=> console.log(e))

  // dbo.collection('User').find({ name: 'Ginisha' }).toArray()
  //   .then(user => console.log(user))
  //   .catch(e => console.log(e))

  dbo.collection('User').count({ name: 'Aayush' })
    .then(res => console.log(res))
    .catch(e => console.log(e))
  
  db.close();
})