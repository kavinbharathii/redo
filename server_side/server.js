const express = require('express');
const app = express();
const mongo = require('./mongoose')
const userSchema = require('./schemas/testing schema')
const fileSchema = require('./schemas/testing schema')
const bodyparser = require('body-parser');
const cors = require('cors')

app.use(bodyparser.json())
app.use(cors())

const connectToMongoDB = async () => {
    await mongo().then( async (mongoose) => {
        try {
            console.log('Connected Successfully !!!')
        }
        finally{
            // mongoose.connection.close()
        }
    })
} 

app.get('/' , (req,res) => {
    res.send('ONUM ILA')
})

app.post('/uploads' , (req,res) => {
    res.send({
        message: `Hello ${req.body.file}`
    })
    const body = req.body.file
    addfile(body)
})  

async function addfile(file) {
    connectToMongoDB()
    const file_ = { 
        myFile : file
    }
    await new fileSchema(file_).save()  

}   

const add = async (name,password) => {
    connectToMongoDB()
    console.log(name,password)
    const user = {
        name: name,
        password: password
    }
    await new userSchema(user).save()

    console.log('Saved')
}

app.post('/register' , (req,res) => {
    res.send({
        message: `Hello ${req.body.name}`
    })
    add(req.body.name,req.body.password)
})

port = process.env.PORT || 8080 ;
app.listen(port, ()=>{console.log(`'Server started on ${port}'`)})
