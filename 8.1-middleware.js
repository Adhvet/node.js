// middleware is any code that runs between request and response- app.use and app.get are all middleware



const express = require('express');
const app = express();  

app.set('view engine', 'ejs');  


app.listen(3000);

app.use((req, res, next)=>{
    console.log('new request made');
    console.log('host:', req.hostname);
    console.log('path:', req.path);
    console.log('method:', req.method);
    next();
});

app.get('/', (req, res)=>{
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},         
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
   
   
    res.render('index', {title:'Home', blogs: blogs, } );     
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