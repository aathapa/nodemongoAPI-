const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/';

MongoClient.connect(url, (err, db) => {
  if (err) throw err;

  const dbo = db.db('TodoApp')
  // db.db('TodoApp').collection('Todo').deleteOne({ text: 'Some Text' })
  //   .then(res => console.log(res))
  //   .catch(e => console.log(e))

  // dbo.collection('User').deleteMany({ name: 'Aayush' })
  //   .then(res => console.log(res))
  //   .catch(e => console.log(e))

  dbo.collection('User').findOneAndDelete({ name: 'Dhan' })
    .then(res => console.log(res))
    .catch(e => console.log(e))

  db.close()
})
