//ability to read and write files on your system

const fs = require('fs');  //imported file systems

//reading files
fs.readFile('./theory1.txt', (err, data) => {
  if (err){
    console.log(err);
  }
  console.log(data.toString());
});

//writing files
fs.writeFile('./theory2.txt', 'hello mumbai', ()=> {   //if the file does not exist then it is just created
    console.log('file written');
})

//directories
if (!fs.existsSync('./theory3.txt')) {     // only runs if theory 3 doesn not exist
    fs.mkdir('./theory3.txt', (err) => {   // a directory(folder) called theory 3 is created 
        if (err){
          console.log(err);
        }
        console.log('folder created');
      } )
} else{
    console.log('dir exists');
}


//deleting files
if(fs.existsSync('./theory3.txt')){
    fs.unlink('./theory3.txt', (err) => {       //delete directory
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    })
}