const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },

    name: { type: DataTypes.STRING, allowNull: false, unique: true, },

    difficulty: { type: DataTypes.INTEGER,  validate: { min: 1, max: 5 },  },

    duration: { type: DataTypes.INTEGER,  },
    
    season: { type: DataTypes.ENUM('summer', 'autumn', 'winter', 'spring'),  },
  });
};
