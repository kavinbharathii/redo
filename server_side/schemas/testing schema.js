const mongoose = require('mongoose');

const reqtsring = {
    type:String,
    required: true
}

const userSchema = mongoose.Schema( {
    name: reqtsring,
    password: reqtsring
})

const fileSchema = mongoose.Schema( {
    myFile : {
        type : String
    }
})

module.exports = mongoose.model('users', userSchema)
module.exports = mongoose.model('file' , fileSchema)
