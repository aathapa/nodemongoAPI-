const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/', (error, db) => {
  if (error) {
    return console.log('Unable to connect mongo server');
  }
  console.log('Connected to mongo server');
  const dbo = db.db("TodoApp");

  // dbo.collection('Todo').insertOne({
  //   text: 'Some Text',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo');
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  //   })

  dbo.collection('User').insertOne({
    name: 'Dhan',
    age: 25
  }, (err, res) => {
    if (err) throw err;
    console.log(res.ops)
  })
  db.close();
})