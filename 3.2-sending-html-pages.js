const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.method, req.url);

    res.setHeader('Content-type', 'text/html');

    fs.readFile('./views/index.html', (err, data)=>{
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