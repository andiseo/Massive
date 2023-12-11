const express = require('express');
const app = express();
const UserRoute = require('./routes/users.js')
const middlewareLogRequest = require('./middleware/logs.js')
require('dotenv').config()

const PORT = process.env.PORT || 5000;

app.use(middlewareLogRequest)
app.use(express.json())
app.use('/users', UserRoute);

app.listen(PORT, () => {
  console.log(`Server up and running in Port ${PORT}`)
})