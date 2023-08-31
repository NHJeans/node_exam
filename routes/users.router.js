import express from "express";
import { Users } from "../schemas/users.schemas.js";

const router = express.Router();

// Q1: 회원의 전체 목록을 조회
router.get("/user", async (req, res) => {
  try {
    const usersDB = await Users.find();
    const allusers = usersDB.map((value) => {
      return {
        userId: value.userId,
        name: value.name,
      };
    });
    res.json(allusers);
  } catch (error) {
    console.error("에러 콘솔 출력:", error);
    res.status(500).send({ message: "서버 내부 에러가 발생했습니다." });
  }
});

// Q2: 회원의 상세 정보를 조회
router.get("/user/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await Users.findOne({ userId: userId }, { _id: 0, __v: 0 });
    if (!user) {
      return res.status(404).send({ message: "유저를 찾을 수 없습니다." });
    }
    const userprint = {
      userId: user.userId,
      name: user.name,
      email: user.email,
      age: user.age,
    };
    res.json(userprint);
  } catch (error) {
    console.error("에러 콘솔 출력:", error);
    res.status(500).send({ message: "서버 내부 에러가 발생했습니다." });
  }
});

// 데이터 입력을 위한 API
router.post("/user", async (req, res) => {
  try {
    const newUser = new Users(req.body);
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.status(400).send({ message: "데이터 형식이 올바르지 않습니다." });
  }
});

export default router;
