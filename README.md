# magic-2020-node-lab
Step-by-step build of Nodejs backend for MAGiC 2020 Lab

In this step we will add the route for POST (add new user).
When a POST request is received it should contain a request body, as JSON data.
That JSON data will define the new user that we should add.

We will use express.json() to parse the request body (to convert it from text into a JavaScript object).
We will also need to add another Route for the POST requests.
The POST function should add the new user to the array, and return the new list of users.