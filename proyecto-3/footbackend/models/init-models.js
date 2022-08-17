var DataTypes = require("sequelize").DataTypes;
var _league = require("./league");
var _players = require("./players");
var _sequelizemeta = require("./sequelizemeta");
var _teams = require("./teams");

function initModels(sequelize) {
  var league = _league(sequelize, DataTypes);
  var players = _players(sequelize, DataTypes);
  var sequelizemeta = _sequelizemeta(sequelize, DataTypes);
  var teams = _teams(sequelize, DataTypes);

  teams.belongsTo(league, { as: "idleague_league", foreignKey: "idleague"});
  league.hasMany(teams, { as: "teams", foreignKey: "idleague"});
  players.belongsTo(teams, { as: "idteam_team", foreignKey: "idteam"});
  teams.hasMany(players, { as: "players", foreignKey: "idteam"});

  return {
    league,
    players,
    sequelizemeta,
    teams,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
