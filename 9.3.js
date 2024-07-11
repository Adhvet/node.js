const express = require('express');
const app = express();  
const mongoose = require('mongoose');
const Blog = require('./9.2-models-blogs');
const { result } = require('lodash');

//connect to momgodb through mongoose
const dbURI = 'mongodb+srv://adhvet:test1234@docs.7lftohd.mongodb.net/?retryWrites=true&w=majority&appName=Docs'
mongoose.connect(dbURI).then(()=>app.listen(3000)).catch((err)=>console.log(err));   //start listening to requests only after connection, log if any error


app.set('view engine', 'ejs');   



//routes
app.get('/', (req, res)=>{
    res.redirect('/blogs');    
});

app.get('/about', (req, res)=>{
    res.render('about', {title:'About us'});                
});


//blog routes
app.get('/blogs', (req,res)=>{
    // const blogs = [
    //     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},         //created an array of objects called blogs
    //     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //   ];
    //   res.render('index', {title:'Home', blogs: blogs, } );

    Blog.find().sort({createdAt: -1})
    .then((result)=>{
        res.render('index',{title: 'All Blogs', blogs: result})
    }).catch((err)=>{
        console.log(err);
    })
})


app.get('/blogs/create', (req,res)=>{
    res.render('create', {title:'Create Blog'});
})

app.use((req, res)=> {
    res.status(404).render('404', {title:'Error'});     
})