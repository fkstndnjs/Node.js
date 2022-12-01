// clear
console.clear(); // 콘솔이나 터미널 화면 정리

console.log("-------- log level --------");
// log level
console.log("log");
console.info("info"); // 정보
console.warn("warn"); // 경보
console.error("error"); // 에러
console.log("\n");

console.log("-------- assert --------");
// assert
console.assert(2 === 3, "not same!");
console.assert(2 === 2, "same!");
console.log("\n");

console.log("-------- print object --------");
// print object
const student = { name: "ellie", age: 20 };
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: false, depth: 0 });
console.log("\n");

console.log("-------- measuring time --------");
// measuring time
console.time("for loop");
for (let i = 0; i < 1000000; i++) {
    i++;
}
console.timeEnd("for loop");
console.log("\n");

console.log("-------- counting --------");
// counting
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
// trace
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
