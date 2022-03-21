const path = require('path');

console.log('dirname', __dirname);
console.log('filename', __filename);

console.log(path.sep);
console.log(path.delimiter);

//basename
console.log(path.basename(__filename));

//dirname
console.log(path.dirname(__filename));

//extension
console.log(path.extname(__filename));

//parse
const parsed = path.parse(__filename);
console.log(parsed);
console.log(parsed.root);
console.log(parsed.name);

const str = path.format(parsed);
console.log(str);

//isAbsolute
console.log('isAbsolute?', path.isAbsolute(__dirname));
console.log('isAbsolute?', path.isAbsolute('../'));

//normalize
console.log(path.normalize('.///folder///'));

//join
console.log(__dirname + path.sep + 'image');
console.log(path.join(__dirname, 'image'));