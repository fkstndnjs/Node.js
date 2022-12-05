import express from "express";

// 서버 생성
const app = express();

app.get("/", (req, res) => {
    res.send("GET /");
});

app.get("/test", (req, res) => {
    res.send("GET /test");
});

app.get("/error", (req, res, next) => {
    // next()안에 에러가 담기면 다른 미들웨어나 함수는 무시하고 에러 핸들러로 전달된다
    next(new Error("Error!"));
});

app.get("/error2", (req, res, next) => {
    try {
        throw new Error("Error 2!");
    } catch (error) {
        next(error);
    }
});

// 간단한 로그인 로직
app.get("/error3/:id", (req, res, next) => {
    if (req.params.id === "ysh") {
        res.send("LOGIN SUCCESS");
    } else {
        throw new Error("LOGIN FALSE");
    }
});

// 요청이 들어온 url에 응답하는 함수가 없을 때
app.use((req, res, next) => {
    res.status(404).send("NOT FOUND");
});

// 에러 핸들러
// 콜백 함수의 인자로 (req, res, next)가 아니라 (err, req, res, next)를 받는다
app.use((error, req, res, next) => {
    console.log(error);
    res.send("ERROR");
});

// 8080포트로 서버 열기
app.listen(8000);
