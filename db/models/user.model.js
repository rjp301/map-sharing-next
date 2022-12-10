import { DataTypes } from "sequelize";
import bcrypt from "bcryptjs";

export default function define(sequelize) {
  const users = sequelize.define(
    "users",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: async function (user, options) {
          user.password = await bcrypt.hashSync(user.password, 10);
        },
      },
    }
  );

  users.associate = function (models) {
    users.hasMany(models.maps, { as: "maps" });
  };

  return users;
}
