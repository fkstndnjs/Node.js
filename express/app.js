import express from "express";

// 서버 생성
const app = express();

app.get("/", (req, res) => {
    res.send("GET /");
});

app.get("/test", (req, res) => {
    res.send("GET /test");
});

// e
app.get("/error", (req, res, next) => {
    next(new Error("Error!"));
});

app.get("/error2", (req, res, next) => {
    try {
        throw new Error("Error 2!");
    } catch (error) {
        next(error);
    }
});

// 요청이 들어온 url을 담당하는 미들웨어가 없을 때
app.use((req, res, next) => {
    res.status(404).send("NOT FOUND");
});

// 에러 핸들러
app.use((error, req, res, next) => {
    console.log(error);
    res.send("ERROR");
});

// 8080포트로 서버 열기
app.listen(8000);
