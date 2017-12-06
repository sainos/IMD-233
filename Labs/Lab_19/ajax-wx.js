// Shorthand for $( document ).ready()
$(function() {
  // weather update button click
  $('button').on('click', function(e) {
    $('ul li').each(function() {
      console.log("this:" + this);
      $(this).remove();
    });
    $.ajax({
      url: "http://api.wunderground.com/api/<yourkey>/geolookup/conditions/q/WA/Bothell.json",
      dataType: "jsonp",
      success: function(parsed_json) {
        var city = parsed_json['location']['city'];
        var state = parsed_json['location']['state'];
        var temp_f = parsed_json['current_observation']['temp_f'];
        var rh = parsed_json['current_observation']['relative_humidity'];
        var str = "<li> Location : " + city + ", " + state + "</li>";

        // Update list items with data from above...
        // $('ul').append(str);
        // $('ul li:last').attr('class', 'list-group-item');
        // str = "<li> Current temperature is: " + temp_f + "</li>";
        // $('ul').append(str);
        // $('ul li:last').attr('class', 'list-group-item');
        // str = "<li> Relative Humidity is: " + rh + "</li>";
        // $('ul').append(str);
        // $('ul li:last').attr('class', 'list-group-item');
        console.log("Current temperature in " + city + " is: " + temp_f);
      }
    });
  });
});
