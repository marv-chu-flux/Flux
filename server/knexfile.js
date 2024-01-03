require('dotenv').config();
const path = require('path');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      // host: process.env.PG_HOST || '127.0.0.1',
      // user: process.env.PG_USER || 'postgres',
      // password: process.env.PG_PASSWORD || 'postgres',
      // database: process.env.PG_DATABASE || 'flux',
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
      host: process.env.PG_HOST || '127.0.0.1',
      user: process.env.PG_USER || 'postgres',
      password: process.env.PG_PASSWORD || 'postgres',
      database: process.env.PG_DATABASE || 'flux',
    },
  },
};
