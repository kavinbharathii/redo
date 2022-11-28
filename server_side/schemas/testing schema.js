const mongoose = require('mongoose');

const reqtsring = {
    type:String,
    required: true
}

const userSchema = mongoose.Schema( {
    name: reqtsring,
    password: reqtsring
})

module.exports = mongoose.model('users', userSchema)
