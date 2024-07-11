const express = require('express');
const app = express();  
const mongoose = require('mongoose');
const Blog = require('./9.2-models-blogs')

//connect to momgodb through mongoose
const dbURI = 'mongodb+srv://adhvet:test1234@docs.7lftohd.mongodb.net/?retryWrites=true&w=majority&appName=Docs'
mongoose.connect(dbURI).then(()=>app.listen(3000)).catch((err)=>console.log(err));   //start listening to requests only after connection, log if any error


app.set('view engine', 'ejs');   

app.get('/add-blog', (req,res)=>{
    const blog = new Blog({
        title: ' blog 2',
        snippet: 'about  second first blog',
        body: 'more about my kjn new blog',
    });

    blog.save().then((result)=>{
        res.send(result)
    }).catch((err)=>{
        console.log(err);
    });
})

app.get('/all-blogs',(req,res)=>{
    Blog.find().then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log(err);
    })
})

 
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