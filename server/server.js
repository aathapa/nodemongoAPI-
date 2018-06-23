const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

const { Todo,User } = require('./models');


const app = express();

app.use(bodyParser.json());

//POST method for todos
app.post('/todos', (req, res) => {
  const newTodo = new Todo({
    text: req.body.data
  })
  // res.send(newTodo)

  newTodo.save()
    .then(doc => res.send(doc))
    .catch(e => res.status(400).send(e))
  
})

//GET method for todos
app.get("/todos", (req, res) => {
  Todo.find()
    .then(todos => res.send({ todos }))
    .catch(e => res.send(e))
})

// fetch todos with id 
app.get("/todos/:id", (req, res) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return console.log('Id not valid');
  }

  Todo.findById(id)
    .then(todos => {
      if (!todos) {
        return res.status(404).send()
      }
      res.send({todos})
    })
    .catch(e=> res.status(400).send())
})

//POST method for users
app.post("/user", (req, res) => {
  const newUser = new User({
    email: req.body.user
  });

  newUser.save()
    .then(user => res.send(user))
    .catch(e => res.status(400).send(e));
})

app.listen(3000,()=> console.log('app is runnig on port 3000'));

