import express from "express";

// 서버 생성
const app = express();

// "http://localhost:8000/" url로 GET 요청이 들어올 때 담당하는 콜백 함수 생성
app.get("/", (req, res) => {
  console.log("req.url", req.url);
  console.log("req.method", req.method);

  // http 요청 응답
  res.send("HOME");
});

// params
app.get("/params/:id", (req, res) => {
  console.log("req.params: ", req.params);
  console.log("req.params: ", req.params.id);

  res.send("Params Test");
});

// query
app.get("/query", (req, res) => {
  console.log("req.query: ", req.query);
  console.log("req.query: ", req.query.id);

  res.send("Query Test");
});

// 8080포트로 서버 열기
app.listen(8000);
