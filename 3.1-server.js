const http = require('http'); 

const server = http.createServer((req, res) => {          //initialized a server
     console.log(req.url, req.method,);


     //set header content type 
     res.setHeader('content-type', 'text/html');      //setting what will be the type of file we send in response through http
     res.write('<p>hello adhvet</p>');
     res.write('<p>bosdika</p>');
     res.end();
}); 

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');  //listening means that server is open and ready to take
});

//local host is a domain name which takes us to ip called loopback ie 127.0.0.1 which points directly back to your own computer
//port number represents a specific channel to connect to the internet, our server also needs a port number to connect to the internet