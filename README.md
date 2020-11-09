# magic-2020-node-lab
Step-by-step build of Nodejs backend for MAGiC 2020 Lab

In this step we will use EJS (Embedded JavaScript templates) to generate HTML.  

Install EJS:  
>npm install ejs

Tell Express that we want to use EJS:
>app.set('view engine' , 'ejs');

Create a `views` folder, and create a view template in there.  

Create a GET route for `/user` that renders the view.  
>app.get('/user', (req, res) 


