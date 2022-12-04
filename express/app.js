import express from "express";

// 서버 생성
const app = express();

// res: json
// json 형태로 보내줌
app.get("/json", (req, res) => {
  res.json(12);
});

// res: sendStatus
// http 상태 코드만 보냄
app.get("/sendStatus", (req, res) => {
  res.sendStatus(200);
});

// res: status + send
// http 상태를 지정하고 보내고 싶은 것까지 같이 보냄
app.get("/send", (req, res) => {
  res.status(201).send("SEND + STATUS");
});

// res: header
// 응답 헤더를 지정할 수 있음
// key: value 형태로 지정하면 됨
app.get("/header", (req, res) => {
  res.header("name", "YuSeokHyun");
  res.send("HEADER");
});

// 8080포트로 서버 열기
app.listen(8000);
