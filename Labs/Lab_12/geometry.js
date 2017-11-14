$(document).ready( function (){

  function caclCircleGeometries(radius) {
    const pi = Math.PI;
    var area = pi*radius*radius;
    var circumference = 2 * pi * radius;
    var diameter = 2* radius;
    var geometries = [area, circumference, diameter];
    return geometries;
  }

  var radius1= caclCircleGeometries(14);
  var radius2= caclCircleGeometries(32);
  var radius3= caclCircleGeometries(21);

  var temp = document.getElementById("radius_1");
  temp.textContent = "Area: " + radius1[0] + " Circumference: " + radius1[1] + " Diameter: " + radius1[2];
  temp = document.getElementById("radius_2");
  temp.textContent = "Area: " + radius2[0] + " Circumference: " + radius2[1] + " Diameter: " + radius2[2];
  temp = document.getElementById("radius_3");
  temp.textContent = "Area: " + radius3[0] + " Circumference: " + radius3[1] + " Diameter: " + radius3[2];



});
