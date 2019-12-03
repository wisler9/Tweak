module.exports = function(sequelize, DataTypes) {
    var Tweak = sequelize.define("tweak", {
    user: DataTypes.STRING,
    description: DataTypes.TEXT,
    content: DataTypes.TEXT
    });
    Tweak.associate = function(models) {
        Tweak.belongsToMany(models.User, {
          foreignKey: {
            allowNull: false,
            defaultValue: 2
          },
          as: "tweaks",
    
          through: models.User
        });
      };

    return Tweak;
};

//has many comments