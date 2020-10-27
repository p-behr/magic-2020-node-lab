const 
    // What port number should the server listen on
    port = 3001,

    //Express is a fast, unopinionated, minimalist web framework
    express = require('express'),
    app = express();



/**
 * START THE WEBSERVER
 */
app.listen(port, () => {
    console.log(`User Maintenance app listening on port #${port}`)
});
