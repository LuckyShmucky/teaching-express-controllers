// import the express library into script file
const express = require('express')
// initialize the express application 
const app = express()

// PORT constant
const PORT = 3000


// homepage routes
app.get('/', function(request, response){
    response.send('<h1>Welcome to the home page</h1>')
})
app.post('/',function(request, response){
    response.send('A POST route for the home page')
})

// a dynamic search route 
app.get('/search/:searchTerm', function(request, response){
    const searchTerm = request.params.searchTerm
    response.send(`<h1>Search page for ${searchTerm}</h1>`)
})
app.post('/search/:searchTerm', function(request, response){
    const searchTerm = request.params.searchTerm
    response.send(`A POST route for the search term: ${searchTerm}`)
})


// sign up routes
app.get('/auth/signup', function(request, response){
    response.send('<h1>Sign up page</h1>')
})
app.post('/auth/signup', function(request, response){
    response.send('A POST route for the signup page')
})

// dashboard routes
app.get('/dashboard', function(request, response){
    response.send('<h1>Dashboard page</h1>')
})
app.post('/dashboard', function(request, response){
    response.send('A POST route for the login page')
})

//login routes
app.get('/auth/login', function(request, response){
    response.send('<h1>Login page</h1>')
})
app.post('/auth/login', function(request, response){
    response.send('A POST route for the login page')
})

//settings page routes
app.get('/settings', function(request, response){
    response.send('<h1>Settings page</h1>')
})
app.post('/settings', function(request, response){
    response.send('A POST route for the settings page')
})


// open the connection to listen to requests
app.listen(PORT, function() {
    console.log(`Server listening on http://localhost:${PORT}`)
})