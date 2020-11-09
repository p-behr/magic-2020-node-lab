const
    // What port number should the server listen on
    port = 3001,

    //Express is a fast, unopinionated, minimalist web framework
    express = require('express'),
    app = express(),

    //node-odbc is an ODBC database interface for Node.js.  It
    // allows connecting to any database if the system has been
    // configured correctly.
    odbc = require('odbc'),
    dsn = 'DSN=MAGIC';


/**
 * Set EJS as the view engine
 */
app.set('view engine', 'ejs');
 

/**
 * express.static() will serve static files, such as images and CSS,
 * from the "public" folder (note: "public" is not part of the URL). 
 */
app.use(express.static('public'));
   


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
 * GET /user
 * Server-rendered list of users 
 */
app.get('/user', (req, res) => {

    let users = [
        {"THUSER" : "NODE1", "THNAME" : "MAGiC Node Lab 1", "THSECL" : "ADMIN"},
        {"THUSER" : "NODE2", "THNAME" : "MAGiC Node Lab 2", "THSECL" : "ADMIN"},
        {"THUSER" : "NODE3", "THNAME" : "MAGiC Node Lab 3", "THSECL" : "ADMIN"},
        {"THUSER" : "NODE4", "THNAME" : "MAGiC Node Lab 4", "THSECL" : "ADMIN"},
    ];

    res.render('users', { userList: users });

});



/**
 * GET /api/user
 * Returns the list of users
 */
app.get('/api/user', (req, res) => {

    let response = {}

    odbc.connect(dsn , (connectionError, connection) => {
        if (connectionError) {
            response = {
                "success" : false,
                "message" : JSON.stringify(connectionError)
            }
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Content-Type", "application/json");
            res.status(200).json(response);
            return;
        }

        connection.query('SELECT thuser, thname, thsecl FROM AC2020.DBFAUT0001', (sqlError, result) => {
            if (sqlError) {
                response = {
                    "success" : false,
                    "message" : JSON.stringify(sqlError)
                }
            } else {
                response = {
                    "success" : true,
                    "users" : Array.from(result)
                }
            }
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Content-Type", "application/json");
            res.status(200).json(response);
            return;
        });
    });
});




/**
 * POST /api/user
 * Add a new user to the list
 */
app.post('/api/user', (req, res) => {

    let response = {};
    let inputParms = [
        req.body.THUSER,
        req.body.THNAME,
        req.body.THSECL
    ]

    odbc.connect(dsn , (connectionError, connection) => {
        if (connectionError) {
            response = {
                "success" : false,
                "message" : JSON.stringify(connectionError)
            }
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Content-Type", "application/json");
            res.status(200).json(response);
            return;
        }

        connection.callProcedure(null, 'AC2020', 'ADD_DBFAUTH', inputParms, (sqlError, result) => {
            if (sqlError) {
                response = {
                    "success" : false,
                    "message" : JSON.stringify(sqlError)
                }
            } else {
                response = {
                    "success" : true,
                    "message" : `User ${req.body.THUSER} has been added by Node.`
                }
            }
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Content-Type", "application/json");
            res.status(200).json(response);
            return;
        });
    });
});



/**
 * DELETE /api/user
 * Remove a user from the list
 */
app.delete('/api/user', (req, res) => {

    let response = {};
    let inputParms = [req.body.THUSER];

    odbc.connect(dsn , (connectionError, connection) => {
        if (connectionError) {
            response = {
                "success" : false,
                "message" : JSON.stringify(connectionError)
            }
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Content-Type", "application/json");
            res.status(200).json(response);
            return;
        }

        connection.callProcedure(null, 'AC2020', 'DELETE_DBFAUTH', inputParms, (sqlError, result) => {
            if (sqlError) {
                response = {
                    "success" : false,
                    "message" : JSON.stringify(sqlError)
                }
            } else {
                response = {
                    "success" : true,
                    "message" : `User ${req.body.THUSER} has been deleted by Node.`
                }
            }
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Content-Type", "application/json");
            res.status(200).json(response);
            return;
        });
    });
});




/**
 * PUT /api/user
 * Update a user
 */
app.put('/api/user', (req, res) => {

    let response = {};
    let inputParms = [
        req.body.THUSER,
        req.body.THNAME,
        req.body.THSECL
    ]

    odbc.connect(dsn , (connectionError, connection) => {
        if (connectionError) {
            response = {
                "success" : false,
                "message" : JSON.stringify(connectionError)
            }
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Content-Type", "application/json");
            res.status(200).json(response);
            return;
        }

        connection.callProcedure(null, 'AC2020', 'UPDATE_DBFAUTH', inputParms, (sqlError, result) => {
            if (sqlError) {
                response = {
                    "success" : false,
                    "message" : JSON.stringify(sqlError)
                }
            } else {
                response = {
                    "success" : true,
                    "message" : `User ${req.body.THUSER} has been updated by Node.`
                }
            }
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Content-Type", "application/json");
            res.status(200).json(response);
            return;
        });
    });
});



/**
 * START THE WEBSERVER
 */
app.listen(port, () => {
    console.log(`User Maintenance app listening on port #${port}`)
});
