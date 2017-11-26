$(document).ready( function (){

  var wx_data = [
    {    day: "fri",    hi: 80,    lo: 55  },
    {    day: "sat",    hi: 75,    lo: 52  },
    {    day: "sun",    hi: 69,    lo: 52  },
    {    day: "mon",    hi: 69,    lo: 48  },
    {    day: "tue",    hi: 68,    lo: 51  }
  ];

  function weatherForecast(){
    var high_temps = [];
    var low_temps = [];

    for(var i =0; i <5; i++){
      high_temps[i] = wx_data[i].hi;
      low_temps[i] = wx_data[i].lo;
    }

    function getSum(total,sum){
      return total + sum;
    }

    var highAvg = high_temps.reduce(getSum)/5;
    var lowAvg = low_temps.reduce(getSum)/5;

    var el = document.getElementById("weather-table");
      el.innerHTML += "<th class='text-center'>High Average</th> <th class='text-center'>Low Average</th> <th class='text-center'>Weekly Average</th>"
      el.innerHTML += "<tr><td>" + highAvg + "</td><td>" + lowAvg + "</td><td>" + (highAvg+lowAvg)/2 + "</td>"

  }

  weatherForecast();

});
