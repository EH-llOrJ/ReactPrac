const express = require("express");
// const ejs = require("ejs");
const app = express();
const cors = require("cors");
const dot = require("dotenv").config();
const PORT = process.env.PORT || 80;
const { sequelize, user } = require("./public");

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("연결이 잘 됐다.");
  })
  .catch((err) => {
    console.log(err);
    console.log("env 파일 갖고 왔는지?");
  });

const options = {
  origin: "http://localhost:3000",
};

app.use(express.json());

app.use(cors(options));

app.post("/login", async (req, res) => {
  let { id, pw } = req.body;
  const users = await user.findOne({
    where: { user_id: id, user_pw: pw },
  });
  if (users) {
    res.send(true);
  } else {
    res.send(false);
  }
});

app.post("/signUp", async (req, res) => {
  let { id, pw } = req.body;
  const users = await user.findOne({
    where: { user_id: id },
  });
  if (!users) {
    user
      .create({
        user_id: id,
        user_pw: pw,
      })
      .then(() => {
        res.send("회원가입 완료");
      });
  } else {
    res.send("동일한 아이디 있음");
  }
});

app.listen(PORT, () => {
  console.log(PORT, "서버 열림");
});
