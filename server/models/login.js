module.exports = function(sequelize, DataTypes) {
    var Login = sequelize.define("Login", {
       email:{
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
        validate: { max: 50 }
      },
       
       password: DataTypes.STRING
    });

    return Login;
};