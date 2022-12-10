import { DataTypes } from "sequelize";

export default function define(sequelize) {
  const maps = sequelize.define("maps", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  });

  maps.associate = function (models) {
    maps.belongsTo(models.users, { as: "user" });
    maps.hasMany(models.markers, { as: "markers" });
  };

  return maps;
}
