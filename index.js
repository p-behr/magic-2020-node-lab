const
    // What port number should the server listen on
    port = 3001,

    //Express is a fast, unopinionated, minimalist web framework
    express = require('express'),
    app = express();



let users = [
    {"userId" : "NODE1", "userName" : "MAGiC Node Lab 1", "security" : "ADMIN"},
    {"userId" : "NODE2", "userName" : "MAGiC Node Lab 2", "security" : "ADMIN"},
    {"userId" : "NODE3", "userName" : "MAGiC Node Lab 3", "security" : "ADMIN"},
    {"userId" : "NODE4", "userName" : "MAGiC Node Lab 4", "security" : "ADMIN"},
];



/**
 * express.json() will parse the request body, and add it as an
 * object onto the request ("req").
 */
app.use(express.json());



/**
 * OPTIONS /api/user
 * Returns the CORS headers for any requested route.
 * This will allow all CORS requests, from any origin.
 * Probably not what you want in production!
 */
app.options("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.sendStatus(200);
});



/**
 * GET /api/user
 * Returns the list of users
 */
app.get('/api/user', (req, res) => {
    let response = {
        "success" : true,
        "users" : users
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Content-Type", "application/json");
    res.status(200).json(response);
});



/**
 * POST /api/user
 * Add a new user to the list
 */
app.post('/api/user', (req, res) => {
    users.push({
        userId: req.body.userId,
        userName: req.body.userName,
        security: req.body.security
    });
    let response = {
        "success" : true,
        "message" : `User ${req.body.userId} has been added`,
        "users" : users
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Content-Type", "application/json");
    res.status(200).json(response);
});



/**
 * DELETE /api/user
 * Remove a user from the list
 */
app.delete('/api/user', (req, res) => {
    users = users.filter( (user) => user.userId !== req.body.userId );
    let response = {
        "success" : true,
        "message" : `User ${req.body.userId} has been removed`,
        "users" : users
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Content-Type", "application/json");
    res.status(200).json(response);
});



/**
 * PUT /api/user
 * Update a user
 */
app.put('/api/user', (req, res) => {
    users = users.map( (user) => user.userId !== req.body.userId ? user : req.body );
    let response = {
        "success" : true,
        "message" : `User ${req.body.userId} has been updated`,
        "users" : users
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Content-Type", "application/json");
    res.status(200).json(response);
});



/**
 * START THE WEBSERVER
 */
app.listen(port, () => {
    console.log(`User Maintenance app listening on port #${port}`)
});
