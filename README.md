# magic-2020-node-lab
Step-by-step build of Nodejs backend for MAGiC 2020 Lab

In this step we will add the route for PUT (update a user).
When a PUT request is received it should contain a request body, as JSON data.

We will map() the array to update the requested user
(if the userId is not the one being updated, return the user as-is.
If the userId is the one being updated, return the data from the request).
Then we return the new list of users.