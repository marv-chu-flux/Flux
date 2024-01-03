require('dotenv').config();
const path = require('path');

module.exports = {
  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.PG_CONNECTION_STRING,
    },
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds'),
    },
  },
  test: {
    client: 'pg',
    connection: {
      connectionString: process.env.PG_CONNECTION_STRING,
    },
  },
};
