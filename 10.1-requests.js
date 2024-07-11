// types of requests:
// Get requests to get a resource 
// Post requests to create new data on the database 
// Delete requests to delte data from db 
// PUT requests to update data 


const express = require('express');
const app = express();  
const mongoose = require('mongoose');
const Blog = require('./9.2-models-blogs');
const { result } = require('lodash');

const dbURI = 'mongodb+srv://adhvet:test1234@docs.7lftohd.mongodb.net/?retryWrites=true&w=majority&appName=Docs'
mongoose.connect(dbURI).then(()=>app.listen(3000)).catch((err)=>console.log(err));   

app.set('view engine', 'ejs');   
app.use(express.urlencoded({extended: true}));  //it takes all url encoded data being sent from create.js after clicking the submit buttom and sendign post request



//routes
app.get('/', (req, res)=>{
    res.redirect('/blogs');    
});

app.get('/about', (req, res)=>{
    res.render('about', {title:'About us'});                
});


//blog routes
app.post('/blogs',(req,res)=>{
    console.log(req.body);
    const blog = new Blog(req.body);

    blog.save().then((result)=>{
        res.redirect('./blogs');
    }).catch((err)=>{
        console.log(err);
    });
})

app.get('/blogs', (req,res)=>{
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