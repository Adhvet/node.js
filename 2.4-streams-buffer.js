//streams - instead of taking chunks of data and reading it, streams make a pipe of sorts and continuosly delivers data bit by bit
//this method is better for bigger databases
//the small bits in a stream are called buffers, kinda like a bucket of water in a pipe

const fs = require('fs');

const readstream = fs.createReadStream('./theory4.txt');  // we initialized a stream giving the directory
const writestream = fs.createWriteStream('./theory5.txt'); //initialized a write stream

readstream.on('data', (chunk)=> {   // a chunk is the buffer, the bucket of data in a stream, on means, On receiving a chunk of data from the stream execute the callback funtion
    console.log('new chunk');  //chunks can be quite large
    console.log(chunk.toString());
    writestream.write('\nNew Chunk\n');
    writestream.write(chunk);      //whatever chunks we received from reading fike, we are writing those to theory 5
})


//instead of writing the above code we can make a pipe directly from readstream to writestream
readstream.pipe(writestream);  // same as above code
