const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resume: {
      type: DataTypes.TEXT
    },
    score: {
      type: DataTypes.INTEGER
    },
    healthScore: {
      type: DataTypes.INTEGER
    },
    instruction: {
      type: DataTypes.TEXT
    }
  });
};


// ID: *
// Nombre *
// Resumen del plato *
// Puntuación
// Nivel de "comida saludable"
// Paso a paso