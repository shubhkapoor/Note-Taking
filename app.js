const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const notes = require('./routes/notes');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/note-taking').then(()=>{
    console.log('MongoDB connected successfully');
}).catch((err)=>{
    console.log(err.message);
});

app.use('/notes' , notes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});