# magic-2020-node-lab
Step-by-step build of Nodejs backend for MAGiC 2020 Lab

In this step we will add the route for OPTIONS to deal with CORS requests.  
```
app.options("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.sendStatus(200);
});
```

When requests are made from the React application, an OPTIONS request will be preceed any other requests.  We must respond to this OPTIONS request before we will be able to provide any of the other routes.  

Once we've added the OPTIONS route, we should be able to make GET requests from the front end.
