const fs = require('fs').promises;

// read a file
fs.readFile('./text3.txt', 'utf8')
    .then(console.log)
    .catch(console.error);

// write a file
fs.writeFile('./file.txt', 'Hello, hi')
    .catch(console.error);

fs.appendFile('./file.txt', ' Im ysh')
    .then(()=>{
        // copy
        fs.copyFile('./file.txt', './file2.txt');
    });

// folder
fs.mkdir('sub-folder3')
    .catch(console.err);

fs.readdir('./')
    .then(console.log);