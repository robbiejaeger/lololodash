var _ = require("lodash");

var worker = function(items) {
  return _.sortBy(items, function(value){
    return -value.quantity;
  });
};

module.exports = worker;
