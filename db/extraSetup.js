export default function applyExtraSetup(sequelize) {
  const { user, map, marker } = sequelize.models
  
  user.hasMany(map)
  map.hasMany(marker)

  marker.belongsTo(map)
  map.belongsTo(user)
}