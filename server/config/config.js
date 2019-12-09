module.exports = {
    "development": {
      "username": "root",
<<<<<<< HEAD:server/config/config.json
      "password": "LMR0305",
=======
      "password": process.env.PASSWORD,
>>>>>>> master:server/config/config.js
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

