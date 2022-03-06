// import the express library into script file
const express = require('express')

// initialize router 
const router = express.Router()

//  GET /settings
router.get('/', function(request, response){
    response.send('<h1>Settings page</h1>')
})
//  POST /settings
router.post('/', function(request, response){
    response.send('A POST route for the settings page')
})

module.exports = router