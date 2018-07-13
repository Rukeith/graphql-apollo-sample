const mongoose = require('mongoose');
const authorModel = require('./models/author.js');

const resolvers = {
  Query: {
    authors: (root, { age }) => authorModel.find({ age }),
    author: (root, { id }) => authorModel.findOne({ id })
  },
  Mutation: {
    addAuthor: (root, {
      name,
      age,
      books
    }) => {
      const author = new authorModel({
        age,
        name,
        books
      });
      return author.save();
    },
    deleteAuthor: (root, { id }) => authorModel.findOneAndRemove({ id }),
    updateAuthor: (root, { id, name }) => authorModel.findOneAndUpdate({ id }, { name })
  }
}

module.exports = resolvers;