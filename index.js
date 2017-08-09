const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null }
];

var sortedRobots = robots.map(function(robot){
  var newArr = []
  if (knownDecepticons.includes(robot.name)) {
    Object.assign(newArr, robot, {alliance: 'decepticon'});
  } else {
    Object.assign(newArr, robot, {alliance: 'autobot'});
  }
  return newArr;
});

var coloredZebraStripes = zebraStripes.map(function(ele, ind){
  var newArr = [];
  if (ind % 2 === 0) {
    Object.assign(newArr, ele, {color: 'black'});
  } else {
    Object.assign(newArr, ele, {color: 'white'});
  }
  return newArr;
});