# magic-2020-node-lab
Step-by-step build of Nodejs backend for MAGiC 2020 Lab

In this step we will add the route for DELETE (remove a user).
When a DELETE request is received it should contain a request body, as JSON data.
That JSON data will tell us which user should be removed.
We already added express.json() in the last step, so we don't have to do that again.

We will filter() the array, removing any elements that match the userId being deleted.
Then we return the new list of users.