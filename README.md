# magic-2020-node-lab
Step-by-step build of Nodejs backend for MAGiC 2020 Lab

In this step we will add the route for PUT (update a user).
When a PUT request is received it should contain a request body, as JSON data:
```
app.put('/api/user', (req, res) => {
    [...code...]
});
```

We will use the map() function to update the user array.  
Then we return the new list of users.