module.exports = function(sequelize, DataTypes) {
    var Tweak = sequelize.define("Tweak", {
    user: DataTypes.STRING,
    description: DataTypes.TEXT,
    content: DataTypes.TEXT
    });


    Tweak.associate = function(models) {
        Tweak.belongsTo(models.User, {
          
          as: "userTweaks",
    
          through: models.User
        });
      };

    return Tweak;
};

//has many comments