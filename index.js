'use strict'
const TwilioSMSBot = require('botkit-sms')
// CONTENT

let recipes = [
    { title: 'No-Churn Chocolate Hazelnut Ice Cream', img: 'https://www.rachaelrayshow.com/images/recipes/choc%20ice%20cream%20800.jpg', url: 'https://www.rachaelrayshow.com/recipes/25310_no_churn_chocolate_hazelnut_ice_cream/' }, 
    { title: 'Mac ‘n Cheese Popcorn', img_url: 'https://www.rachaelrayshow.com/recipe/2014/12/8993/9066CheesePop800.jpg', recipe_url: 'https://www.rachaelrayshow.com/food/recipes/19211_mac_n_cheese_popcorn/' }, 
    { title: 'Pepperoni Pizza Fries', img_url: 'https://www.rachaelrayshow.com/images/recipes/PizzaFries_800.jpg', recipe_url: 'https://www.rachaelrayshow.com/recipes/25308_pepperoni_pizza_fries/' },
    { title: 'Penne with Prosciutto, Peas and Leeks in Cream Sauce', img_url: 'https://www.rachaelrayshow.com/images/recipes/11127Penne800.jpg', recipe_url: 'https://www.rachaelrayshow.com/recipes/24689_penne_with_prosciutto_peas_and_leeks_cream_sauce/' }
]

let randomRecipe = recipes[Math.floor(Math.random() * recipes.length)]

// recipes.forEach(recipe => console.log(recipe))
console.log(randomRecipe)


// BOTKIT