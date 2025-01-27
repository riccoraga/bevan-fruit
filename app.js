const express = require('express');
const app = express();
const cors = require('cors')

const logger = require('./logger')
// Middleware
app.use(cors())
app.use(express.json())
app.use(logger)




const fruitsRouter = require("./routes/fruits")

app.get('/', (req, res) => {
   res.send('Server Running waiting for an entry!');
})

app.use('/fruits', fruitsRouter);

module.exports = app