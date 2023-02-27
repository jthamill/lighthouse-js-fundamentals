// const stations = [["Big Bear Donair", 10, "restaurant"], ["Bright Lights Elementary", 50, "school"], ["Moose Mountain Community Center", 45, "community center"]];
// let suitableStations = [];

// const chooseStations = function (stations) {
//   for (let i = 0; i <= stations.length-1; i++) {
//     if (stations[i][1] >= 20  && (stations[i][2] === "school" || stations[i][2] === "community center")) { 
//       suitableStations.push(stations[i][0]);    
//     }
//   }
//   return suitableStations;
// }
  
// console.log(chooseStations(stations));



const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
  // create variable
  const approvedStations = [];
  // loop over stations
  for(let i = 0; i < stations.length; i++) {
    // Check if stations is 20 or more people AND if it is a school or community centre
    if ((stations[i][1] >= 20) && (stations[i][2] === 'community centre' || stations[i][2] === 'school')) {
      // Add location to the approved array
      approvedStations.push(stations[i][0]);
    }
  }
  return approvedStations;
}

chooseStations(stations);