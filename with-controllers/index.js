// import the express library into script file
const express = require('express')
// initialize the express application 
const app = express()

// PORT constant
const PORT = 3000

const searchRoutes = require('./controllers/search')
const authRoutes = require('./controllers/auth')
const dashboardRoutes = require('./controllers/dashboard')
const settingsRoutes = require('./controllers/settings')

// homepage routes
app.get('/', function(request, response){
    response.send('<h1>Welcome to the home page</h1>')
})
app.post('/',function(request, response){
    response.send('A POST route for the home page')
})

/* 
 notice how much cleaner this approach is then having all the routes in your index file 
 the 1st argument for the `use` method is the root path for the route, the 2nd argument is the routes for that path

 For example: The /auth path is the root path and we are passing in all the routes for that path
   1. GET /auth/signup
   2. POST /auth/signup
   3. GET /auth/login
   4. POST /auth/login
*/
app.use('/search', searchRoutes)
app.use('/auth', authRoutes)
app.use('/dashboard', dashboardRoutes)
app.use('/settings', settingsRoutes)



// open the connection to listen to requests
app.listen(PORT, function() {
    console.log(`Server listening on http://localhost:${PORT}`)
})