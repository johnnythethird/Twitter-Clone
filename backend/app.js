require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require("helmet")
const logger = require("morgan")
const app = express();


const port = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// setting up cors
const corsOption = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credential: true,
  exposeHeaders: ["X-auth-token"],
}

app.use(cors(corsOption));

app.listen(port, () => {
  console.log(`Server running at ${port}`)
});