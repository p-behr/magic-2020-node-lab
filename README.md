# magic-2020-node-lab
Step-by-step build of Nodejs backend for MAGiC 2020 Lab

In this step we will connect the Node application to the Db2 database.  

First thing you have to do is install the ODBC interface:  
> npm install odbc  


In our application, we require ODBC:
> odbc = require('odbc')  

Since we're using the database now, we remove the `users` array.  In our routes, instead of using the local array we will be interacting with the database.     