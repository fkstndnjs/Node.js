import express from "express";

// 서버 생성
const app = express();

// 요청으로 넘어오는 json body값을 읽기 위해서는 express.json() 미들웨어를 사용해야 한다
// 사용하지 않으면 undefined로 넘어온다
app.use(express.json());

// post는 서버에 무언가를 생성할 때 사용하는 http 메서드이다
app.post("/", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

// 8000포트로 서버 열기
app.listen(8000);
