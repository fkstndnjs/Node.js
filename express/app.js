import express from "express";
import userRouter from "./app-router";

// 서버 생성
const app = express();

// /user 경로로 들어오는 모든 요청은 userRouter에서 처리한다
// app.js 파일에 모든 코드가 있는 것보다 훨씬 보기 편하고 유지 보수가 쉽다
app.use("/user", userRouter);

// 8000포트로 서버 열기
app.listen(8000);
