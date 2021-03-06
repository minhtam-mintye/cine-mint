"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CinemaMovie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Movie, Cinema }) {
      // define association here
      this.belongsTo(Movie, { foreignKey: "movieId" });
      this.belongsTo(Cinema, { foreignKey: "cinemaId" });
    }
  }
  CinemaMovie.init(
    {
      cinemaId: DataTypes.INTEGER,
      movieId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "CinemaMovie",
    }
  );
  return CinemaMovie;
};
