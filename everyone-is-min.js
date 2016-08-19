var _ = require("lodash");

var worker = function(towns) {
  var cats = {hot: [], warm: []};

  function highTemps(towns){
    return towns > 19;
  }

  _.forEach(towns, function(town, townName){
    if (_.every(town, highTemps)) {
      cats.hot.push(townName);
    } else if (_.some(town, highTemps)) {
      cats.warm.push(townName);
    };
  });

  return cats;
};

module.exports = worker;
