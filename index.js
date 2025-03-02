const express = require('express');
const app = express();
const jobRoutes = require('./route/job.route');
const mongoose = require('mongoose');

app.use(express.json())
const DB_URI = 'mongodb+srv://bantikumarsingh97:lJ2dl5u8N6gVw1hg@cluster0.t9ati.mongodb.net/';
mongoose
    .connect(DB_URI)
    .then(() => console.log("DB connect successfully"))
    .catch((err) => console.log("Error while connection database", err));


app.use('/api/v1/job' , jobRoutes)

let port  = 4000;
app.listen(port , () => console.log('Server started on:', port))