//viewengines: outputs dynamic data like shit from server, injects dynamic data like vars, loops etc in browser in html
//we use EJS in here

const express = require('express');
const app = express();  //initialized express

app.set('view engine', 'ejs');   //initialized view engine
// app.set('views', 'my_views');       //tells ejs to store values in folder called views, by default it is stored in views



app.listen(3000); 

app.get('/', (req, res)=>{
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},         //created an array of objects called blogs
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
   
    // res.sendFile('./views/index.html', {root: __dirname});
    res.render('index', {title:'Home', blogs: blogs, } );     //render is available with view engines, node goes into views folder finds index.ejs and renders it, whatever is inside the curly brackets is exported to the html page for dynamic rendering, here an object containing key as title is exported      
});

app.get('/about', (req, res)=>{
    res.render('about', {title:'About us'});                
});

app.get('/blogs/create', (req,res)=>{
    res.render('create', {title:'Create Blog'});
})

app.use((req, res)=> {
    res.status(404).render('404', {title:'Error'});     
})