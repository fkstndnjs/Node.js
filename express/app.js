import express from "express";

// 서버 생성
const app = express();

// app.use
// 지정한 경로 뒤에 어떤 경로가 와도 실행되는 미들웨어
app.use("/", (req, res, next) => {
  console.log("app.use()");
  next();
});

// 경로를 아무것도 넣지 않으면 "/"로 설정된다.
app.use((req, res, next) => {
  console.log("app.use() 2");
  next();
});

app.get("/", (req, res) => {
  res.send("GET /");
});

app.get("/test", (req, res) => {
  res.send("GET /test");
});

app.get("/test/test", (req, res) => {
  res.send("GET /test/test");
});

// 8080포트로 서버 열기
app.listen(8000);
