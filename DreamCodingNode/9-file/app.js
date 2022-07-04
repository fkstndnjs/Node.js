const fs = require('fs');

try {
    fs.renameSync('./text.txt', './text-new.txt');
} catch(error){
    console.log(error);
}

fs.rename('./text-new.txt', './text.txt', (error)=>{
    console.log(error);
});
console.log('hello');

fs.promises
    .rename('./text.txt', './text-new.txt')
    .then(()=>console.log('done!'))
    .catch(console.error);