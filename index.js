function scuberGreetingForFeet(dist){
  // Write your code here!
  let freeRide, cost, sorry;

  if (dist > 2500) {
      sorry = 'No can do.';
      return sorry;
  } else if (dist > 2000) {
    cost = 'I will gladly take your thirty bucks.';
    return cost;
  } else if (dist <= 400 ) {
    freeRide = 'This one is on me!';
    return freeRide;
  }
}

function ternaryCheckCity(city){
  // Write your code here!
return (city === 'NYC' ? 'Ok, sounds good.' : 'No go.')

}

function switchOnCharmFromTip(service){
  // Write your code here!
  switch (service) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default: 
      return 'Bye.';
  }
}