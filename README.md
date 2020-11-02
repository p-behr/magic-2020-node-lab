# magic-2020-node-lab
Step-by-step build of Nodejs backend for MAGiC 2020 Lab

In this step we will add the route for DELETE (remove a user).
When a DELETE request is received it should contain a request body, as JSON data.
```
app.delete('/api/user', (req, res) => {
    [...code...]
});
```

We will use the filter() to remove the user from the array.  
Then we return the new list of users.