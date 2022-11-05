const Sequelize = require("sequelize");
const config = require("../config/config");
const { database, username, password } = config.dev;
const sequelize = new Sequelize(database, username, password, config.dev);

const content = require("./content");

const db = {};
db.sequelize = sequelize;

db.content = content;
content.init(sequelize);

/*
content.js 작성 후
const content = require("./content");
db.content = content;
content.init(sequelize);

app.js에서
{ content } = require("./public"); 추가

*/

module.exports = db;
