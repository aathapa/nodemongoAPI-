const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  text: { type: String },
  completed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Number,
    default: null
  }
});

const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    minlength: 1,
    required: true
  }
})

module.exports = {
  TodoSchema,
  UserSchema
}