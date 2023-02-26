// a little example

//the variable amount represents the indicies that are looped over in the array. Each index is looped over in a "for of" so you do't have to do any math as it relateds to the length of the array!
 
const amounts = [1,2,3];
let total = 0;

for (let amount of amounts) {
  total += amount;
}
console.log(total);