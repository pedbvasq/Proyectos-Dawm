const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teams', {
    idteams: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    ab: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    idplayers: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    budget: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    idleague: {
      type: DataTypes.STRING(45),
      allowNull: false,
      references: {
        model: 'league',
        key: 'leaguename'
      }
    },
    points: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    titles: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'teams',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idteams" },
        ]
      },
      {
        name: "idleague",
        using: "BTREE",
        fields: [
          { name: "idleague" },
        ]
      },
    ]
  });
};
