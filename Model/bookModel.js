const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bookSchema = new Schema({
  bookName: {
    type: String,
    unique: true
  },
  bookPrice: {
    type: Number
  },
  isbnNumber: {
    type: String
  },
  authorName: {
    type: String
  },
  publishedAt: {
    type: String
  },
  publication: {
    type: String
  },
  imageUrl: {
    type: String
  }
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book