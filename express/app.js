import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";

// 서버 생성
const app = express();

// express.json()
// json 형식(Content-Type: Application/json)의 req.body를 자바스크립트 객체로 파싱해주는 미들웨어
app.use(express.json());

// express.urlencoded()
// HTML form 형식(Content-Type: Application/x-www-form-urlencoded)의 req.body를 자바스크립트 객체로 파싱해주는 미들웨어
app.use(express.urlencoded({ extended: false }));

// express.static()
// 경로를 지정하고 그 경로에 존재하는 파일들은 url로 가져올 수 있게 해주는 미들웨어
app.use(express.static("public"));

// cors()
// 외부 미들웨어로 "npm i cors"를 통해 설치해야 한다
// CORS(Cross-Origin Resource Sharing) 정책을 손쉽게 다룰 수 있게 해주는 미들웨어
app.use(cors());

// cookieParser()
// 외부 미들웨어로 "npm i cookie-parser"를 통해 설치해야 한다
// header에 담겨있는 쿠키를 자바스크립트 객체로 파싱해주는 미들웨어
app.use(cookieParser());

// morgan()
// 외부 미들웨어로 "npm i cookie-parser"를 통해 설치해야 한다
// http 메서드나 경로 등 다양한 정보를 콘솔에 남겨주는 미들웨어
app.use(morgan("combined"));

// helmet()
// 외부 미들웨어로 "npm i cookie-parser"를 통해 설치해야 한다
// 각종 보안 관련 설정을 해주는 미들웨어
app.use(helmet());

app.post("/", (req, res) => {
    res.send({ body: req.body, cookie: req.cookies });
});

// 8000포트로 서버 열기
app.listen(8001);
