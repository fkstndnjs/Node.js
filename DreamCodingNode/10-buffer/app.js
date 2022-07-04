// buffer: 고정된 사이즈의 메모리 덩어리
// array of integers, byte of data

const buf = Buffer.from('Hi');
console.log(buf); //unicode
console.log(buf.length);
console.log(buf[0], buf[1]); //ascii code
console.log(buf.toString());

const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2);
console.log(buf2, buf3);
buf2[0]=72;
buf2[1]=105;
console.log(buf2.toString());

//copy
buf2.copy(buf3);
console.log(buf3.toString());

//concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());