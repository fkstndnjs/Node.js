import express from "express";

// 서버 생성
const app = express();

// express.json()
// json 형식(Content-Type: Application/json)의 req.body를 파싱해주는 미들웨어
app.use(express.json());

// express.urlencoded()
// HTML form 형식(Content-Type: Application/x-www-form-urlencoded)의 req.body를 파싱해주는 미들웨어
app.use(express.urlencoded({ extended: false }));

// express.static()
// 경로를 지정하고 그 경로에 존재하는 파일들은 url로 가져올 수 있게 해주는 미들웨어
app.use(express.static());

app.get("/", (req, res) => {
    res.send("HOME");
});

// 8000포트로 서버 열기
app.listen(8000);
