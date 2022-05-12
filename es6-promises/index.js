const takeAChance = require('./take-a-chance');

const chance = takeAChance('Gabe');

chance.then(resolve => {
  console.log(resolve);
}).catch(reject => {
  console.error(reject.message);
});

// chance.then(resolve => {
//   console.log(resolve);
// }, reject => {
//   console.error(reject.message);
// });
