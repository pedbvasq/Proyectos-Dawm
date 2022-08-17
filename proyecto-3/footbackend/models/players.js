const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('players', {
    idplayers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    firts_name: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: "NO REGISTRADOS"
    },
    last_name: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: "NO REGISTRADOS"
    },
    position: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: "NO REGISTRADOS"
    },
    salary: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    goals: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    assists: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    matches: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    date_birth: {
      type: DataTypes.DATEONLY,
      allowNull: true
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
