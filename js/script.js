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
// Input
function getPizza() {
  var price = 0;
  var size = "";
  var top = 0;
  var total = 0;

  var s1 = document.getElementById("s1");
  var s2 = document.getElementById("s2");

  if (s1.checked == true) {
    price = 6.0;
    size = "large";
  } else if (s2.checked == true) {
    price = 10.0;
    size = "extraLarge";
  }

  var t1 = document.getElementById("topping1");
  var t2 = document.getElementById("topping2");
  var t3 = document.getElementById("topping3");
  var t4 = document.getElementById("topping4");

  if (t1 == true) {
    top = top + 1.0;
    document.getElementById("t_options").innerHTML = "1topping";
  } else top = top;

  if (t2 == true) {
    top = top + 1.75;
    document.getElementById("t_options").innerHTML = "2topping";
  } else top = top;

  if (t3 == true) {
    top = top + 2.5;
    document.getElementById("t_options").innerHTML = "3topping";
  } else top = top;

  if (t4 == true) {
    top = top + 3.35;
    document.getElementById("t_options").innerHTML = "4topping";
  } else top = top;

  document.getElementById("t_result").innerHTML = "$ " + top;

  total = (size + toppings) * 0.13;

  document.getElementById("total_result").innerHTML =
    "Your Current Total is $ " + total;
}
