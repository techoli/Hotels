const express = require("express")

const app = express()
const dbConfig = require('./db')
const roomsRoute = require('./routes/roomsRoute')
const usersRoute = require('./routes/usersRoute')

app.use(express.json())

app.use('/api/rooms', roomsRoute)
app.use('/api/users', usersRoute)

app.listen(5000, () => {
    console.log('App listening on port 3000! ');
});