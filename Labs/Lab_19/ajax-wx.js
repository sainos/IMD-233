// Shorthand for $( document ).ready()
$(function() {
  // weather update button click
  $('button').on('click', function(e) {
    $('ul li').each(function() {
      console.log("this:" + this);
      $(this).remove();
    });
    $.ajax({
      url: "http://api.wunderground.com/api/a2fb20dd598019bc/geolookup/conditions/q/WA/Bothell.json",
      dataType: "jsonp",
      success: function(parsed_json) {
        var city = parsed_json['location']['city'];
        var state = parsed_json['location']['state'];
        var temp_f = parsed_json['current_observation']['temp_f'];
        var rh = parsed_json['current_observation']['relative_humidity'];
        var str = "<li> Location : " + city + ", " + state + "</li>";

        var wind = parsed_json['current_observation']['wind_string'];
        var weather = parsed_json['current_observation']['weather'];
        var icon = parsed_json['current_observation']['icon_url'];
        var str = "<li style=\"text-align: center\"> <img src=\"" + icon + "\"></li>";

       $('ul').append(str);
       $('ul li:last').attr('class', 'list-group-item');
       var str = "<li> Location : " + city + ", " + state + "</li>";
       $('ul').append(str);
       $('ul li:last').attr('class', 'list-group-item');
       var str = "<li> Current temperature is: " + temp_f + "</li>";
       $('ul').append(str);
       $('ul li:last').attr('class', 'list-group-item');
       var str = "<li> Relative Humidity is: " + rh + "</li>";
       $('ul').append(str);
       $('ul li:last').attr('class', 'list-group-item');
       var str = "<li> Weather Today is: " + weather + "</li>";
       $('ul').append(str);
       $('ul li:last').attr('class', 'list-group-item');
       var str = "<li> Wind: " + wind + "</li>";
       $('ul').append(str);
       $('ul li:last').attr('class', 'list-group-item');
        console.log("Current temperature in " + city + " is: " + temp_f);
      }
    });
  });
});
