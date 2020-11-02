const
    // What port number should the server listen on
    port = 3001,

    //Express is a fast, unopinionated, minimalist web framework
    express = require('express'),
    app = express();



let users = [
    {"THUSER" : "NODE1", "THNAME" : "MAGiC Node Lab 1", "THSECL" : "ADMIN"},
    {"THUSER" : "NODE2", "THNAME" : "MAGiC Node Lab 2", "THSECL" : "ADMIN"},
    {"THUSER" : "NODE3", "THNAME" : "MAGiC Node Lab 3", "THSECL" : "ADMIN"},
    {"THUSER" : "NODE4", "THNAME" : "MAGiC Node Lab 4", "THSECL" : "ADMIN"},
];



/**
 * express.json() will parse the request body,
 * and adds it to the request ("req").
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
        THUSER: req.body.THUSER,
        THNAME: req.body.THNAME,
        THSECL: req.body.THSECL
    });
    let response = {
        "success" : true,
        "message" : `User ${req.body.THUSER} has been added`,
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
