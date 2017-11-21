$(document).ready( function (){

  function Flight(airline, number, origin, destination, depTime, arrivalTime, arrivalGate){
    this.airline = airline;
    this.number = number;
    this.origin = origin;
    this.destination = destination;
    this.depTime = new Date(depTime);
    this.arrivalTime = new Date(arrivalTime);
    this.arrivalGate = arrivalGate;
    this.flightDuration = (this.arrivalTime - this.depTime)/1000;
  };

  var flight1 = new Flight(" Alaska Airlines", 436, "SEATTLE, WA", "LOS ANGELES, CA", 'November 20, 2017 09:20:00', 'November 21, 2017 00:15:30', '65A');
  var flight2 = new Flight("WestJet", 763, "TORONTO, CANADA", "LONDON, UNITED KINGDOM", 'November 20, 2017 09:13:00', 'November 21, 2017 09:23:30', '32B');
  var flight3 = new Flight("Spirit", 320, "BALTIMORE, MD", "ATLANTA, GA", 'November 20, 2017 09:42:00', 'November 21, 2017 11:34:30', 'D2');
  var flight4 = new Flight("Air Transat", 292, "TORONTO, CANADA", "MANCHESTER, UNITED KINGDOM", 'November 20, 2017 09:43:00', 'November 21, 2017 09:15:30', 'TERMINAL 1');
  var flight5 = new Flight("SkyWest", 5008, "DENVER, CO", "ST GEORGE, UT", 'November 20, 2017 06:58:00', 'November 20, 2017 09:10:30', 'GATE 2');

  var flights = [flight1, flight2, flight3, flight4, flight5];

  var el = document.getElementById("flight-data");
  el.innerHTML += "<th>Airline</th> <th>Number</th> <th>Origin</th> <th>Destination</th> <th>Department Time</th> <th>Arrival Time</th> <th>Arrival Gate</th>"
  for(var i =0; i<5; i++){
    el.innerHTML += "<tr><td class='dark-bg'>" + flights[i].airline + "</td><td class='light-bg'>" + flights[i].number + "</td><td class='dark-bg'>" + flights[i].origin +
    "</td><td class='light-bg'>" + flights[i].destination + "</td><td class='dark-bg'>" + flights[i].depTime + "</td><td class='light-bg'>" + flights[i].arrivalTime +
    "</td><td class='dark-bg'>" + flights[i].arrivalGate + "</td></tr>";
  }

});
