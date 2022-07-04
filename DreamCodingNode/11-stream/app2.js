const fs = require('fs');
const { finished } = require('stream');

const writeStream = fs.createWriteStream('./text2.txt');
writeStream.on('finish', ()=>{
    console.log('finished');
});

writeStream.write('hello');
writeStream.write('node');
writeStream.end();