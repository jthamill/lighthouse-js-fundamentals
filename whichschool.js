// const whichSchool  = function (age) {
//   if (age < 13 ? "Elementary School" : (age >= 13 && age <= 18) ? "Secondary School" : "Lighthouse Labs" );
// }

const whichSchool  = function (age) {
   if (age < 13){
    return "Elementary School";
  }
   else if (age >= 13 && age <= 18) {
    return "Secondary School";
   }
   else {
    return "Lighthouse Labs";
   }
  }
  whichSchool(20);