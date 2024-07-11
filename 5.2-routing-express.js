const express = require('express');

const app = express();  //initialized express

//listen for requests
app.listen(3000); //creating a server

app.get('/', (req, res)=>{
    // res.send('<p>home page<p/>');
    res.sendFile('./views/index.html', {root: __dirname});         //sending html file through express
});

app.get('/about', (req, res)=>{
    res.send('<p>about page<p/>');                
});

app.get('/about-us', (req,res)=> {
    res.redirect('/about');                         //redirecting a diff url to an existing page
});

app.use((req, res)=> {
    res.sendFile('./views/404.html', {root: __dirname});        //this function shpuld always be at the bottom, if nothing matches then this is used
})