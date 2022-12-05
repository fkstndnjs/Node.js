import express from "express";
import router from "./app-router";

// 서버 생성
const app = express();

app.use("/user", router);

// 8000포트로 서버 열기
app.listen(8000);
