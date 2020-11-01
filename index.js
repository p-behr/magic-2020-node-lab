const
    // What port number should the server listen on
    port = 3001,

    //Express is a fast, unopinionated, minimalist web framework
    express = require('express'),
    app = express();


/**
 * An array of users
 */
let users = [
    {"THUSER" : "NODE1", "THNAME" : "MAGiC Node Lab 1", "THSECL" : "ADMIN"},
    {"THUSER" : "NODE2", "THNAME" : "MAGiC Node Lab 2", "THSECL" : "ADMIN"},
    {"THUSER" : "NODE3", "THNAME" : "MAGiC Node Lab 3", "THSECL" : "ADMIN"},
    {"THUSER" : "NODE4", "THNAME" : "MAGiC Node Lab 4", "THSECL" : "ADMIN"},
];



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
 * START THE WEBSERVER
 */
app.listen(port, () => {
    console.log(`User Maintenance app listening on port #${port}`)
});
