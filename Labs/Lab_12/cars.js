$(document).ready( function (){
  var chevy = ["Chevrolet", "Avalanche", 2013, 22000];
  var honda = ["Honda", "Accord", 2014, 25000];
  var bmw = ["BMW", "3 Series", 2014, 34000];
  var acura = ["Acura", "CSX", 2008, 12000];
  var dodge = ["Dodge", "Avenger", 2016, 18000];

  var cars = [chevy, honda, bmw, acura, dodge];

  console.log(cars[0][0]);

  document.getElementById("make_1").textContent = cars[0][0];
  document.getElementById("make_2").textContent = cars[1][0];
  document.getElementById("make_3").textContent = cars[2][0];
  document.getElementById("make_4").textContent = cars[3][0];
  document.getElementById("make_5").textContent = cars[4][0];

  document.getElementById("model_1").textContent = cars[0][1];
  document.getElementById("model_2").textContent = cars[1][1];
  document.getElementById("model_3").textContent = cars[2][1];
  document.getElementById("model_4").textContent = cars[3][1];
  document.getElementById("model_5").textContent = cars[4][1];

  document.getElementById("year_1").textContent = cars[0][2];
  document.getElementById("year_2").textContent = cars[1][2];
  document.getElementById("year_3").textContent = cars[2][2];
  document.getElementById("year_4").textContent = cars[3][2];
  document.getElementById("year_5").textContent = cars[4][2];

  document.getElementById("price_1").textContent = cars[0][3];
  document.getElementById("price_2").textContent = cars[1][3];
  document.getElementById("price_3").textContent = cars[2][3];
  document.getElementById("price_4").textContent = cars[3][3];
  document.getElementById("price_5").textContent = cars[4][3];




});
