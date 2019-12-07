module.exports = function(sequelize, DataTypes) {
    var Profile = sequelize.define("Profile", {
        Name: DataTypes.STRING,
        Bio: DataTypes.TEXT,
        Tweak:DataTypes.TEXT,
        Tweaks: DataTypes.TEXT,
    });

    return Profile;
};