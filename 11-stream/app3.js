const fs = require('fs');
const { EventEmitter } = require('stream');

const readStream = fs.createReadStream('./text.txt')
const writeStream = fs.createWriteStream('./text3.txt');
const piping = readStream.pipe(writeStream);
piping.on('finish', ()=>{
    console.log('finished');
});