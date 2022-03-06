// import the express library into script file
const express = require('express')

// initialize router 
const router = express.Router()

//   GET /auth/signup
router.get('/signup', function(request, response){
    response.send('<h1>Sign up page</h1>')
})
//   POST /auth/signup
router.post('/signup', function(request, response){
    response.send('A POST route for the signup page')
})
//   GET /auth/login
router.get('/login', function(request, response){
    response.send('<h1>Login page</h1>')
})
//   POST /auth/login
router.post('/login', function(request, response){
    response.send('A POST route for the login page')
})

module.exports = router