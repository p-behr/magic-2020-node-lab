# magic-2020-node-lab
Step-by-step build of Nodejs backend for MAGiC 2020 Lab

In this step we will create an aray with 4 users:
```
let users = [
    {"THUSER" : "NODE1", "THNAME" : "MAGiC Node Lab 1", "THSECL" : "ADMIN"},
    {"THUSER" : "NODE2", "THNAME" : "MAGiC Node Lab 2", "THSECL" : "APPL"},
    {"THUSER" : "NODE3", "THNAME" : "MAGiC Node Lab 3", "THSECL" : "PGM"},
    {"THUSER" : "NODE4", "THNAME" : "MAGiC Node Lab 4", "THSECL" : "ADMIN"},
];
```

We will also create the route to handle GET requests.  
GET requests to the path `/api/user` will return the array of users:
```
app.get('/api/user', (req, res) => {
  [...GET code here...]
});
```

If you make a request from the browser it should work:
```
http://magic.magic-ug.org:3001/api/user
```

Requests made from React will not, because we need to add a route for OPTIONS, which we will do in the next step.