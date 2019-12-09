module.exports = function(sequelize, DataTypes) {
    var Login = sequelize.define("Login", {
       email: DataTypes.STRING,
    //    validate:{
    //            max:23,
    //            is: ["^[a-z]+$",'i']
    //        },
       password: DataTypes.STRING
    });

    return Login;
};