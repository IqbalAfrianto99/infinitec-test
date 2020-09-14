const utils = require('./utils');

// Default object
const test1 = {
    name: null,
    email: 'example@email.com',
    address: '',
    age_in: 14,
    jobTitle_eq: 'Manager'
}
  
let result = [] //Initial result variable

//   Map object key
Object.keys(test1).map(function(key) {
    
    // Push desired result to variable
    result.push({
      field: key,
      operator: utils.defineOperator(key),
      value: test1[key]
    })
});
  
console.log('result', result) //Output