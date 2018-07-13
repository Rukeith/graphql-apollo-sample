const mongoose = require('mongoose');
const schema = mongoose.Schema;

const authorSchema = new schema({
  id: schema.Types.ObjectId,
  name: String,
  age: Number,
  books: [String]
});

const model = mongoose.model('author', authorSchema);
module.exports = model;