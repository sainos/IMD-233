$(document).ready( function (){

  function Stock(name, marketCap, sales, profit, employees) {
      this.name = name;
      this.marketCap = marketCap;
      this.sales = sales;
      this.profit = profit;
      this.employees = employees;
  }

    var microsoft = new Stock("Microsoft", "$381.7 B", "$86.8 B", "$22.1 B", '128,000');
    var symetra = new Stock("Symetra Financial", "$2.7 B", "$2.2 B", "$254.4 M", '1,400');
    var micron = new Stock("Micron Technology", "$37.6 B", "$16.4 B", "$3.0 B", '30,400');
    var f5 = new Stock("F5 Networks", "$9.5 B", "$1.7 B", "$311.2 M", '3,834');
    var expedia = new Stock("Expedia", "$10.8 B", "$5.8 B", "$398.1 M", '18,210');
    var nautilus = new Stock("Nautilus", "$476 M", "$274.4 M", "$18.8 M", '340');
    var heritage = new Stock("Heritage Financial", "$531 M", "$137.6 M", "$21 M", '748');
    var cascade = new Stock("Cascade Microtech", "$239 M", "$136 M", "$9.9 M", '449');
    var nike = new Stock("Nike", "$83.1 B", "$27.8 B", "$2.7 B", '56,500');
    var alaska = new Stock("Alaska Air Group", "$7.9 B", "$5.4 B", "$605 M", '13,952');

    var stocks = [microsoft, symetra, micron, f5, expedia, nautilus, heritage, cascade, nike, alaska];

    var stockContent = document.getElementById("stockContent");
    function fillStocks(item, index) {
        var combine = "<tr><td class='name'>" + item['name'] + "</td>";
        combine += "<td>" + item['marketCap'] + "</td>";
        combine += "<td>" + item['sales'] + "</td>";
        combine += "<td>" + item['profit'] + "</td>";
        combine += "<td>" + item['employees'] + "</td></tr>";
        stockContent.innerHTML += combine;
    }

    document.getElementById("populate-button").onclick = function(){stocks.forEach(fillStocks)};

});
