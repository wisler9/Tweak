module.exports = function(sequelize, DataTypes) {
    var Comments = sequelize.define("Comments", {
    user: DataTypes.STRING,
    tweak: DataTypes.TEXT
    });

    return Comments;
};