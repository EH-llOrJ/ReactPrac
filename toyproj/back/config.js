const config = {
  dev: {
    username: "root",
    password: process.env.PW,
    database: "test2",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};

module.exports = config;
