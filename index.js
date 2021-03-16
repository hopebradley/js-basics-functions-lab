
function distanceFromHqInBlocks(block) {
  if (block>42) {
    return block-42;
  }
  else {
    return 42-block;
  }

}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block)*264;
}

function distanceTravelledInFeet(start, end) {

  const blocks =  Math.max(start, end)-Math.min(start, end);
  return blocks*264;
}

function calculatesFarePrice(start, end) {
  const feetTravelled = distanceTravelledInFeet(start, end);
  if (feetTravelled < 401) {
    return 0;
  }
  else if (feetTravelled > 400 && feetTravelled < 2001) {
    return (feetTravelled-400)*.02;
  }
  else if (feetTravelled < 2501) {
    return 25;
  }
  else {
    return 'cannot travel that far';
  }
}







