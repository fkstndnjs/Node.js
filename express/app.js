import express from "express";
import fs from "fs";
import fsAsync from "fs/promises";

// 서버 생성
const app = express();

app.use(express.json());

app.get("/file1", (req, res) => {
    fs.readFile("./file1.txt", (err, data) => {
        if (err) {
            res.status(404).send("file1.txt NOT FOUND");
        }
        const text = data.toString();
        res.send(text);
    });
});

app.get("/file2", (req, res) => {
    return fsAsync
        .readFile("/file2.txt")
        .then((data) => res.send(data))
        .catch((err) => {
            res.status(404).send("file2.txt NOT FOUND");
        });
});

app.get("/file3", async function (req, res) {
    try {
        const data = await fsAsync.readFile("/file3.txt");
        res.send(data);
    } catch (error) {
        res.status(404).send("file3.txt NOT FOUND");
    }
});

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({ message: "ERROR" });
});

// 8000포트로 서버 열기
app.listen(8000);
