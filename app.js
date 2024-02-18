const express = require("express")
const app = express()

/* Alternative of first two lines
  const app = require('express')()
*/
const connectToDatabase = require("./Database")
const Book = require("./Model/bookModel")


// multer config imports

const { multer, storage } = require("./Middleware/multerConfig")
const upload = multer({ storage: storage })

/* Alternative of line 13
const multer = require("./Middleware/multerConfig").multer
const storage = require(".Middleware/multerConfig").storage
*/
app.use(express.json())

connectToDatabase()

app.get("/", (req, res) => {
  res.status(200).json({
    "message": "success"
  })
})

app.post("/book", upload.single("image"), (req, res) => {
  let fileName;
  if (!req.file) {
    fileName = "https://imgs.search.brave.com/MYZ5wRA1blI9PpRYQlguuzBnvTbLBft6gzTK5FkrKSE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzAxLzE1LzIz/LzM2MF9GXzMwMTE1/MjMwOF9nR2NXSUl1/aTZzVWpyTTVpR1pK/SUh5cEMxcUhHajBY/Ry5qcGc"
  } else {
    fileName = "localhost:3000/" + req.file.filename
  }
  const { bookName, bookPrice, isbnNumber, authorName, publishedAt, publication } = req.body
  Book.create({
    bookName,
    bookPrice,
    isbnNumber,
    authorName,
    publishedAt,
    publication,
    imageUrl: fileName
  })

  res.status(201).json({
    message: "Book Created Successfully"
  })

})

app.get("/book", async (req, res) => {
  const books = await Book.find()    // returns array
  res.status(200).json({
    message: " Book Fetched Successfully",
    data: books
  })
})

app.get("/book/:id", async (req, res) => {
  const id = req.params.id
  const book = await Book.findById(id)    // returns object
  res.status(200).json({
    message: "Single Book Fetched Successfully",
    data: book
  })
})


app.delete("/book/:id", async (req, res) => {
  const id = req.params.id
  await Book.findByIdAndDelete(id)
  res.status(200).json({
    message: "Book Deleted Successfully"

  })
})


app.patch("/book/:id", async (req, res) => {
  const id = req.params.id
  const { bookName, bookPrice, isbnNumber, authorName, publishedAt, publication } = req.body
  await Book.findByIdAndUpdate(id, {
    bookName: bookName,
    bookPrice: bookPrice,
    isbnNumber: isbnNumber,
    authorName: authorName,
    publishedAt: publishedAt,
    publication: publication
  })
  res.status(200).json({
    message: "Book Updated Successfully"
  })
})

app.use(express.static("./Storage/"))

app.listen(3000, () => {
  console.log("Nodejs server has been started at port 3000")
})