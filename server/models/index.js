const { mongoose } = require('../db/mongoose');

const { TodoSchema,UserSchema } = require('../schemas/TodoSchema');

const Todo = mongoose.model('Todo', TodoSchema);

const User = mongoose.model('User', UserSchema);

module.exports = {
  Todo,
  User
};
