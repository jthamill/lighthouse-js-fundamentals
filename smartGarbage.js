//Increase the value of the key rep'd by the trash param by 1


function smartGarbage(trash, bins) {
  bins[trash] += 1;
  return bins;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));

console.log(smartGarbage('compost', { waste: 4, recycling: 2, compost: 5 }));