# magic-2020-node-lab
Step-by-step build of Nodejs backend for MAGiC 2020 Lab

In this step we will add the route for OPTIONS.

When requests are made from React an OPTIONS request will be sent before other requests.  
So, if we don't have the OPTIONS route we can't provide any other routes.

Once we've added the OPTIONS route, we should be able to make GET requests from the front end.
