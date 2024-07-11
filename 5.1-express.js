const express = require('express');

const app = express();  //initialized express

//listen for requests
app.listen(3000); //creating a server

app.get('/', (req, res)=>{
    res.send('<p>home page<p/>');                //express automatically workd out the content type while using send
});

