module.exports = {
    "development": {
      "username": "root",
      "password": process.env.PASSWORD,
      "database": "tweak_DB",
      "host": "localhost",
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": "LMR0305",
      "database": "tweak_DB",
      "host": "localhost",
      "dialect": "mysql",
      "logging": false
    },
    "production": {
      "use_env_variable": "JAWSDB_URL",
      "dialect": "mysql"
    }
  }

