//read in the required random array library
var uniqueRandomArray = require('unique-random-array');
//read in the json file
var randomData = require('./random-data.json');

//public api
module.exports = {
  all: randomData,
  random: uniqueRandomArray(randomData)
};
