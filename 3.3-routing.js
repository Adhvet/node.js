//routing to diffent pages like localhost:3000/about 


const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.method, req.url);

    res.setHeader('Content-type', 'text/html');

    let path = './views/';

    switch(req.url) {
        case '/': path = path + 'index.html';
        res.statusCode = 200;                   //status code 200 means good, 404 means doesnt exist
        break;
        case '/about': path += 'about.html';
        res.statusCode = 200;
        break;
        default: path += '404.html';
        res.statusCode = 404;
        break;
    }

    fs.readFile(path, (err, data)=>{
        if(err){
            console.log(err);
            res,end();
        } else{
            res.write(data);
            res.end();
        }
        console.log('read file index html');

    })
    
})

server.listen(3000, 'localhost', ()=>{
    console.log('listeing for requests');
})