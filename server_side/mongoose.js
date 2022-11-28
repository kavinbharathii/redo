
const express = require('express');
const app = express();
const mongoose = require('mongoose')

module.exports = async() => {
    const uri = "mongodb+srv://Barathkumar:barath@cluster0.7ro4tea.mongodb.net/test";

    await mongoose.connect(uri, {
        useNewUrlParser: true
    });
    console.log('Connecting !!!')
    return mongoose
}
