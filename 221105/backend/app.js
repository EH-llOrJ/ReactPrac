// npm i express cors sequelize mysql2

const express = require("express");
const app = express();
const dot = require("dotenv").config();
const PORT = process.env.PORT || 80;
const cors = require("cors");
const { sequelize, content } = require("./public");
const { count } = require("./public/content");

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("시퀄라이즈 잘 열림");
  })
  .catch((err) => {
    console.log(err);
  });

// 브라우저 보안 정책
// 개발용으로 그냥 true 원래는 도메인
app.use(cors({ origin: true }));

app.get("/test", (req, res) => {
  res.send("테스트");
});

app.use(express.json());

app.post("/deleteContent", (req, res) => {
  const { num } = req.body;
  content.destroy({ where: { id: num } });
  res.send("");
});

app.post("/createContent", (req, res) => {
  // console.log(req.body);
  const { title, text, user } = req.body;
  content.create({ title, text, user, count: 0 });
  res.send(req.body);
});

app.post("/getListContent", async (req, res) => {
  const { index, count } = req.body;
  const contents = await content.findAll({
    // offset: index * 10, // 원하는 글의 갯수
    offset: index * count,
    limit: count,
  });
  res.send(contents);
});

app.listen(PORT, () => {
  console.log(PORT, "서버 열림");
});
