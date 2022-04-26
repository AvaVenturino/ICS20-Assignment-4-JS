// Copyright (c) 2022 Ava Venturino All rights reserved
//
// Created by: Ava Venturino
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Assignment-4-JS/sw.js", {
    scope: "/ICS20-Assignment-4-JS/",
  });
}

var pizzaPrice = 0;

function Pizza(size,toppings,pizzaPrice); {
  this.size = size;
  this.toppings = toppings;
  this.pizzaPrice = 0;
}

Pizza.prototype.price = function() {
  if (this.size == "Large") {
    this.pizzaPrice += 6.00;
  }
  else if (this.size == "ExtraLarge") {
    this.pizzaPrice += 10.00;
  }
  if (this.toppings == "1Topping") {
    this.pizzaPrice += 1.00;
  }

  if (this.toppings == "2Toppings") {
    this.pizzaPrice += 1.75;
  }
  if (this.toppings == "3Toppings") {
    this.pizzaPrice += 2.50;
  }
  if (this.toppings == "4Toppings") {
    this.pizzaPrice += 3.35;
  }

return this.pizzaPrice;
}


$(document).ready(function(){
  $("form#pizza").submit(function(event){
    event.preventDefault();

    var size = $("input[type=radio][name=size]").val();
    var toppings = $("input[type=radio][name=toppings]").val();
    var newPizza = new Pizza(size,toppings,pizzaPrice);
    newPizza.price();

    $("responses").append(" Your total price is " + newPizza.pizzaPrice );
      
    });
});