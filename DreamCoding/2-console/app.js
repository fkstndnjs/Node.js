console.log('logging...');
console.clear();

//log level
console.log('log');
console.warn('warn');
console.error('error');

//assert
console.assert(2===3, 'not same!');
console.assert(2===2, 'same');

//print object
const student = {name: 'ysh', age: 20};
console.log(student);
console.table(student);
console.dir(student);

//measuring time
console.time('for loop');
for(let i=0; i<100000; i++){
}
console.timeEnd('for loop');

//counting
function a(){
    console.count('a function');
}

a();
a();
a();
console.countReset('a function');
a();
a();

//trace

function f1(){
    f2();
}

function f2(){
    f3();
}

function f3(){
    console.log('hi');
    console.trace();
}

f1();