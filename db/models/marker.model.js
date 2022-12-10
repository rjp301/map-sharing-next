import { DataTypes } from "sequelize";

export default function define(sequelize) {
  const markers = sequelize.define("markers", {
    geometry: DataTypes.GEOMETRY,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    complete: DataTypes.BOOLEAN,
  });

  markers.associate = function (models) {
    markers.belongsTo(models.maps, { as: "map" });
  };

  return markers;
}
