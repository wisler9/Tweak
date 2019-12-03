module.exports = function(sequelize, DataTypes) {
    var Comments = sequelize.define("comments", {
      longitude: DataTypes.INTEGER,
      latitude: DataTypes.INTEGER,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      venue: DataTypes.STRING
    });

    return Comments;
};