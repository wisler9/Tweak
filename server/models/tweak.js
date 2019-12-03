module.exports = function(sequelize, DataTypes) {
    var Tweak = sequelize.define("tweak", {
    user: DataTypes.STRING,
    description: DataTypes.TEXT,
    content: DataTypes.TEXT
    });

    return Tweak;
};

//has many comments