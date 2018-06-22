const express = require('express');
const bodyParser = require('body-parser');

const { Todo,User } = require('./models');


const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  const newTodo = new Todo({
    text: req.body.data
  })
  // res.send(newTodo)

  newTodo.save()
    .then(doc => res.send(doc))
    .catch(e => res.status(400).send(e))
  
})

app.post("/user", (req, res) => {
  const newUser = new User({
    email: req.body.user
  });

  newUser.save()
    .then(user => res.send(user))
    .catch(e => res.status(400).send(e));
})

app.listen(3000,()=> console.log('app is runnig on port 3000'));

