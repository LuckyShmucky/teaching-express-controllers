// import the express library into script file
const express = require('express')

// initialize router 
const router = express.Router()

//  GET /search/:searchTerm
router.get('/:searchTerm', function(request, response){
    const searchTerm = request.params.searchTerm
    response.send(`<h1>Search page for ${searchTerm}</h1>`)
})
//  POST /search/:searchTerm
router.post('/:searchTerm', function(request, response){
    const searchTerm = request.params.searchTerm
    response.send(`A POST route for the search term: ${searchTerm}`)
})


module.exports = router