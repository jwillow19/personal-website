//jshint esversion6

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

let message = ""

// Setting up view engine
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

app.listen(3000, function(req, res){
    console.log('Site up and running at port 3000')
})

app.get('/', function(req, res){
    // res.sendFile(__dirname + '/index.html')
    res.render('personal')
})

// app.post('/', function(req, res){
//     console.log(req.body)
//     message = 'Email sent!'
//     res.redirect('/')
// })

app.get('/contact', function(req, res){
    // res.redirect('contact')
    res.render('contact', {msg: message})

    //[*] nodemailer
})

app.post('/contact', function(req, res){
    console.log(req.body)
    message = 'Email sent!'
    res.redirect('/contact')
})