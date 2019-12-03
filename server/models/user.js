module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user", {
    tweaks: DataTypes.TEXT
    });

    return User;
};