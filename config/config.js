module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": null,
    "database": "moviematch",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "marietreschow",
    "password": null,
    "database": "moviematch",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "marietreschow",
    "password": null,
    "database": "moviematch",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
};
