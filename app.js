import express from "express";
import connect from "./schemas/index.js";
import { usersRouter } from "./routes/index.js";


const app = express();
const port = 6050;
connect();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/", usersRouter);

app.listen(port, () => {
  console.log(`포트 연걸 성공 ${port}`);
});
