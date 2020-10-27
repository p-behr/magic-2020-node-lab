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
    res.json(response);
})



/**
 * START THE WEBSERVER
 */
app.listen(port, () => {
    console.log(`User Maintenance app listening on port #${port}`)
});
