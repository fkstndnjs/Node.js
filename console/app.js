console.clear(); // 콘솔이나 터미널 화면 정리

console.log("-------- log level --------");
console.log("log");
console.info("info");
console.warn("warn");
console.error("error");
console.log("\n");

console.log("-------- assert --------");
console.assert(2 === 3, "not same!");
console.assert(2 === 2, "same!");
console.log("\n");

console.log("-------- print object --------");
const person = { name: "석현", age: 25, stack: { node: true } };
console.log(person);
console.table(person);
console.dir(person, { showHidden: true, colors: false, depth: 0 });
console.dir(person, { showHidden: true, colors: true, depth: 1 });
console.log("\n");

console.log("-------- measuring time --------");
console.time("for loop");
for (let i = 0; i < 1000000; i++) {
    i++;
}
console.timeEnd("for loop");
console.log("\n");

console.log("-------- counting --------");
function a() {
    console.count("a function");
}
a();
a();
a();
console.countReset("a function");
a();
console.log("\n");

console.log("-------- trace --------");
function f1() {
    f2();
}
function f2() {
    f3();
}
function f3() {
    console.log("f3");
    console.trace();
}
f1();
