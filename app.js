//jshint esversion6

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

app.listen(3000, function(req, res){
    console.log('Site up and running at port 3000')
})

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
})

