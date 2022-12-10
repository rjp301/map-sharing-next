import Sequelize from "sequelize";
import applyExtraSetup from "./extraSetup.js";

import userModel from "./models/user.model.js";
import mapModel from "./models/map.model.js";
import markerModel from "./models/marker.model.js";

const sequelize = new Sequelize("map_sharing", "riley", null, {
  dialect: "postgres",
  url: process.env.PSQL_URL,
});

const modelDefiners = [userModel, mapModel, markerModel];
modelDefiners.forEach((f) => f(sequelize));
applyExtraSetup(sequelize);

export const { models } = sequelize;
export default sequelize;