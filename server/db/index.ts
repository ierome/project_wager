const config = require("config");
const { Pool } = require("pg");

export const conn = new Pool({
  user: "nox",
  password: "ierome",
  host: "localhost",
  database: "gameboss",
  port: 5432
});
