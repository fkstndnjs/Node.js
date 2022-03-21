const fs = require('fs');
/*
const readStream = fs.createReadStream('./text.txt', {
})

const data = [];

readStream.on('data', chunk =>{
    data.push(chunk);
});

readStream.on('end', ()=>{
    console.log(data.join(''));
})
readStream.on('error', error => {
    console.log(error);
})

fs.createReadStream('./text.txt', {
})
*/
const data = [];

fs.createReadStream('./text.txt', {
}).on('data', chunk =>{
    data.push(chunk);
}).on('end', ()=>{
    console.log(data.join(''));
}).on('error', error => {
    console.log(error);
});
