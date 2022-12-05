import express from "express";

// 서버 생성
const app = express();

app.get("/", (req, res) => {
    res.send("HOME");
});

// 8000포트로 서버 열기
app.listen(8000);
