const { MongoClient, ObjectID } = require('mongodb');

const url = 'mongodb://localhost:27017/';

MongoClient.connect(url, (err, db) => {
  if (err) throw err

  const dbo = db.db('TodoApp');
  dbo.collection('User').findOneAndUpdate({
    _id: new ObjectID('5b2b7ef54c068b05566460b8')
  },
    {
      $set: {name: 'Aayush'},     
      $inc: {age: +23}
    },
    {
      returnOriginal: false
    }
  ).then(res => console.log(res))
    .catch(e => console.log(e))
  db.close();
})

