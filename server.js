const express = require("express")

const app = express()
const dbConfig = require('./db')
const roomsRoute = require('./routes/roomsRoute')

app.use('/api/rooms', roomsRoute)

app.listen(5000, () => {
    console.log('App listening on port 3000! ');
});