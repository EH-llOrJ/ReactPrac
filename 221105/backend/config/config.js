const dot = require("dotenv").config();
const env = process.env;

const config = {
  dev: {
    username: env.MYSQL_USERNAME,
    password: env.MYSQL_PW,
    database: env.MYSQL_DB,
    host: "127.0.0.1",
    dialect: "mysql",
  },
};

module.exports = config;
