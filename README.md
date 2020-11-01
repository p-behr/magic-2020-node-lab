# magic-2020-node-lab
Step-by-step build of Nodejs backend for MAGiC 2020 Lab

Create the "index.js" file:  
$ touch index.js

In `index.js`, we will import the Express module:
```    
const
    express = require('express'),
    app = express();
```

and start a webserver:
```
app.listen(port, () => {
    console.log(`User Maintenance app listening on port #${port}`)
});
```
