module.exports = function(sequelize, DataTypes) {
    var Profiles = sequelize.define("Profiles", {
        Name: DataTypes.STRING,
        Bio: DataTypes.TEXT,
        Tweak:DataTypes.TEXT
       
    });
    

    return Profiles;
};