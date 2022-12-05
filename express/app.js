import express from "express";
import fs from "fs";
import fsAsync from "fs/promises";

// 서버 생성
const app = express();

app.use(express.json());

app.get("/file1", (req, res) => {
    fs.readFile("/file1.txt", (err, data) => {
        if (err) {
            res.status(404).send("file1.txt NOT FOUND");
        } else {
            // else로 안 감싸주면 함수는 return을 만날 때까지 실행되므로
            // error가 발생하면 아래의 코드가 실행된다
            const text = data.toString();
            res.send(text);
        }
    });
});

app.get("/file2", (req, res) => {
    fsAsync
        .readFile("/file2.txt")
        .then((data) => {
            const text = data.toString();
            res.send(text);
        })
        .catch((err) => {
            res.status(404).send("file2.txt NOT FOUND");
        });
});

app.get("/file3", async function (req, res) {
    try {
        const data = await fsAsync.readFile("/file3.txt");
        const text = data.toString();
        res.send(text);
    } catch (error) {
        res.status(404).send("file3.txt NOT FOUND");
    }
});

// 위에서도 안 잡힌 에러는 app.use()로 생성한 에러 핸들러에서 잡힌다
app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({ message: "ERROR" });
});

// 8000포트로 서버 열기
app.listen(8000);
