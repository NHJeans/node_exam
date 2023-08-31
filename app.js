import express from "express";
import connect from "./schemas/index.js";
import { usersRouter } from "./routes/index.js";


const app = express();
const port = 6050;
connect();

// JSON 미들웨어 사용 설정
app.use(express.json());
// 기본 경로 설정
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// 라우터 설정
app.use("/", usersRouter);

// 오류 핸들링 미들웨어
app.use((err, req, res, next) => {
  console.error(err.stack); // 에러 스택 출력
  res.status(err.status || 500).send({
    status: err.status || 500,
    message: err.message || "Internal Server Error",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
