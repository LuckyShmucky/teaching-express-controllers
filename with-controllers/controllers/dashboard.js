// import the express library into script file
const express = require('express')

// initialize router 
const router = express.Router()

//  GET /dashboard
router.get('/', function(request, response){
    response.send('<h1>Dashboard page</h1>')
})
//  POST /dashboard
router.post('/', function(request, response){
    response.send('A POST route for the login page')
})

module.exports = router