$(document).ready( function (){

  var count =0;

  function updateCounter(){
    document.getElementById("counter").textContent = "My Counter Value: " + count;
    count++;
  }

  updateCounter();
  setInterval(updateCounter, 3000);

});
