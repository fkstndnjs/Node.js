import express from "express";

// 서버 생성
const app = express();

// express.json()
// json 형식(Content-Type: Application/json)의 req.body를 객체로 파싱해주는 미들웨어
app.use(express.json());

// express.urlencoded()
// HTML의 form 데이터가 submit 되면 파싱해주는 미들웨어
app.use(express.urlencoded({ extended: false }));

// express.static()
// 경로를 지정하고 그 경로의 파일들은 url로 가져올 수 있다.
app.use(express.static());

app.get("/", (req, res) => {
    res.send("HOME");
});

// 8000포트로 서버 열기
app.listen(8000);
