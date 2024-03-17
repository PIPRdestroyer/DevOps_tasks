const express = require('express');
const mongoose = require('mongoose');

const mongoString = 'mongodb://mongo_db:27017/dv_test'

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(4000, () => {
    console.log(`Server Started at ${4000}`)
})