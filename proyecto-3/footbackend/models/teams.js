const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teams', {
    idteams: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nameteam: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    ab: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    budget: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idleague: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'league',
        key: 'idleague'
      }
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    titles: {
      type: DataTypes.INTEGER,
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
        name: "fk_liga_idx",
        using: "BTREE",
        fields: [
          { name: "idleague" },
        ]
      },
    ]
  });
};
