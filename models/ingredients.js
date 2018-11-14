const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize.js');

const Ingredient = sequelize.define('ingredient', {
  name: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

Ingredient.sync({force: true}).then( () => {
  console.log('Synch successful!')
  return Ingredient.bulkCreate([
    {name: 'Mayonnaise', type: 'sauce'},
    {name: 'Yellow Mustard', type: 'sauce'},
    {name: 'Honey Mustard', type: 'sauce'},
    {name: 'Dijon Mustard', type: 'sauce'},
    {name: 'Horseradish Mayo', type: 'sauce'},
    {name: 'Cheddar', type: 'cheese'},
    {name: 'Swiss', type: 'cheese'},
    {name: 'Provolone', type: 'cheese'},
    {name: 'Lettuce', type: 'veggies'},
    {name: 'Tomato', type: 'veggies'},
    {name: 'Red Onion', type: 'veggies'},
    {name: 'Pickles', type: 'veggies'},
    {name: 'Olives', type: 'veggies'},
    {name: 'Banana Peppers', type: 'veggies'},
    {name: 'Jalapenos', type: 'veggies'}
  ]).catch( err => {
    console.log(err);
  });
}).catch( err => {
  console.log(err);
});