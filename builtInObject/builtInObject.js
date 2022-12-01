const timeout = setTimeout(() => {
    console.log("1.5초 후 실행");
});

const interval = setInterval(() => {
    console.log("1초마다 실행");
});

const timeout2 = setTimeout(() => {
    console.log("실행되지 않음");
});

setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(interval);
});

const immediate = setImmediate(() => {
    console.log("즉시 실행");
});

const immediate2 = setImmediate(() => {
    console.log("실행되지 않음");
});

clearImmediate(immediate2);
