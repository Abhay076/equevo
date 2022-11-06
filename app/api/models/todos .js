const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const TodoSchema = new Schema({
 name: {
  type: String,
  trim: true,  
  required: true,
 },
 date: {
  type: Date,
  trim: true,
  required: true
 }
});
module.exports = mongoose.model('Todo', TodoSchema)