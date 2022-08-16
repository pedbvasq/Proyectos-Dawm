const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('league', {
    idleague: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    leaguename: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "leaguename_UNIQUE"
    },
    budget: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'league',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idleague" },
        ]
      },
      {
        name: "leaguename_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "leaguename" },
        ]
      },
    ]
  });
};
