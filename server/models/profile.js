module.exports = function(sequelize, DataTypes) {
    var Profile = sequelize.define("profile", {
    userName: DataTypes.STRING,
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
    bio: DataTypes.TEXT,
    experience: DataTypes.TEXT
    });
    Profile.associate = function(models) {
        Profile.belongsToMany(models.User, {
          foreignKey: {
            allowNull: false,
            defaultValue: 2
          },
          as: "userProfile",
    
          through: models.User
        });
      };
    return Profile;
};

