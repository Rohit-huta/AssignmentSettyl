const express = require('express')
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser');
require('dotenv/config')
const bodyparser = require('body-parser')
// DB
const connect = require("./db.js");

// PORT 
const PORT = process.env.PORT || 8081;


// Middlewares
app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cookieParser());



// Requests
app.get('/', (req, res) => {
    res.json("Hello")
})

connect()
  .then(() => {
    try {
      app.listen(PORT, () => {
        console.log(`Server started...${PORT}`);
      });
    } catch (error) {
      console.log("Couldn't connect to the server: ", error);
    }
  })
  .catch((error) => console.log("Invalid connection:"));