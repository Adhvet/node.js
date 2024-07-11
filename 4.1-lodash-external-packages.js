// first installed nodemon globally
//then installed lodash locally
// npm install - install all dependencies, incase node modules file does not exist



const http = require('http');
const fs = require('fs');
const _ = require('lodash');  //node modules is created automatically whenever you install a local dependency

const server = http.createServer((req, res) => {


    //lodash
    const num = _.random(0, 20000);   //random number gebrator in nodash
    console.log(num);


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