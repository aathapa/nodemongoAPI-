const { mongoose } = require('../server/db/mongoose');
const { Todo,User } = require('../server/models');

const id = '5b2cd7b26a8c4a16738afb4d'

User.findById(id)
  .then((user) => {
    if (user) {
      console.log('User found');
      console.log(user)
      
    }
  })
  .catch(e => console.log(e))
  
