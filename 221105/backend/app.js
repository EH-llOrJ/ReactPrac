// npm i express cors sequelize mysql2

const express = require("express");
const app = express();
const dot = require("dotenv").config();
const PORT = process.env.PORT || 80;
const cors = require("cors");
const { sequelize, content } = require("./public");

app.listen(PORT, () => {
  console.log(PORT, "서버 열림");
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("시퀄라이즈 잘 열림");
  })
  .catch((err) => {
    console.log(err);
  });

// 브라우저 보안 정책
// 개발용으로 그냥 ture 원래는 도메인
app.use(cors({ origin: true }));

app.get("/test", (req, res) => {
  res.send("테스트");
});

app.use(express.json());

app.post("/createContent", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get("/testCreate", (req, res) => {
  content.create({ title: "난 테스트", user: "테스트 유저", count: 0 });
  res.send();
});
