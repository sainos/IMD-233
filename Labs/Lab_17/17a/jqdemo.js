$(document).ready(function () {
    // add a 5px red dashed boarder around the panel div
    // provide a 10 pixel padding around all of the divs
    $('.panel').css('border', '5px dashed red');
    $('.panel').css('padding', '10px');

    // set all div's padding to 3px
    $('div').css('padding-top', '3px');

    // set all divs in the panel to background gray
    $('div.panel').css('background-color', 'gray');

    // set all divs of class cat to green
    $('div.cat').css('color','green');

    // set all divs of class dog to red
    $('div.dog').css('color','red');

    // set the id of lab to a 1px solid yellow border
    $('#lab').css('border', '1px solid yellow')

    // set the last div with class dog to background yellow
    $('div.panel div:nth-child(4)').css('background-color','yellow');

    // set the calico cat's width to 50%,
    $('#calico').css('width','50%');
    // background to green and color to white
    $('#calico').css('background-color','green');
    $('#calico').css('color','white');
});
