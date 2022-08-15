const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('players', {
    idplayers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    position: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    salary: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    goals: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    assists: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    matches: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    date_birth: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    idteam: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'teams',
        key: 'idteams'
      }
    }
  }, {
    sequelize,
    tableName: 'players',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idplayers" },
        ]
      },
      {
        name: "fk_team_idx",
        using: "BTREE",
        fields: [
          { name: "idteam" },
        ]
      },
    ]
  });
};
