// npm i express cors sequelize mysql2

const express = require("express");
const app = express();
const dot = require("dotenv").config();
const PORT = process.env.PORT || 80;
const cors = require("cors");

app.listen(PORT, () => {
  console.log(PORT, "서버 열림");
});

// 브라우저 보안 정책
// 개발용으로 그냥 ture 원래는 도메인
app.use(cors({ origin: true }));

app.get("/test", (req, res) => {
  res.send("테스트");
});

app.use(express.json());
