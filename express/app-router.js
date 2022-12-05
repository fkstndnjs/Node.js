import express from "express";

// express.Router()를 통해 라우팅 모듈을 생성한다
const router = express.Router();

router.get("/", (req, res) => {
    res.send("ROUTER");
});

export default router;
