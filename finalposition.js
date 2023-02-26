const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

let destination = [0,0];

// function finalPosition(moves){
//   for (let direction of moves) {
//     if (direction === "north") {
//       destination[1]++;
//     }
//     else if (direction === "south") {
//       destination[1]--;
//     }
//     else if (direction === "east") {
//       destination[0]++;
//     }
//     else if (direction === "west") {
//       destination[0]--;
//     } 
//   }
//   return destination;
// }

// console.log(finalPosition(moves));

function finalPosition(moves) {
  for (let i = 0; i <= moves.length - 1; i++){
    if (moves[i] === "north") {
      destination[1]++;
    }
    else if (moves[i] === "south") {
      destination[1]--;
    }
    else if (moves[i] === "east") {
      destination[0]++;
    }
    else if (moves[i] === "west") {
      destination[0]--;
    }
  }
  return destination;
}

console.log(finalPosition(moves));