module.exports = function(sequelize, DataTypes) {
    var Profile = sequelize.define("profile", {
    userName: DataTypes.STRING,
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
    bio: DataTypes.TEXT,
    experience: DataTypes.TEXT
    });

    return Profile;
};