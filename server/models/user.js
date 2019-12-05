module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      userName: DataTypes.STRING,
      email: DataTypes.TEXT,
      password: DataTypes.TEXT,
      bio: DataTypes.TEXT,
      experience: DataTypes.TEXT
    });

    // User.associate = function(models) {
    //   User.belongsToMany(models.Profile, {
    //     foreignKey: {
    //       allowNull: false,
    //       defaultValue: 2
    //     },
    //     as: "userProfile",
  
    //     through: models.User
    //   });
    // };

    User.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        User.hasMany(models.Tweak, {
          foreignKey: {
            allowNull: false,
            defaultValue: 2
          },
          as: "Tweaks"
        });
      };

    return User;
};

//has many tweaks
