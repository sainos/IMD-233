function Flight(airline, number, origin, destination, depTime, arrivalTime, arrivalGate){
  this.airline = airline;
  this.number = number;
  this.origin = origin;
  this.destination = destination;
  this.depTime = new Date(depTime);
  this.arrivalTime = new Date(arrivalTime);;
  this.arrivalGate = arrivalGate;
  this.flightDuration = function() {
	   return (this.arrivalTime - this.depTime)/1000;
  }
};

var temp = new Flight("rand", 333, "Cal", "was", 'March 20, 2017 03:20:00', 'March 20, 2017 03:20:30', '32B');
