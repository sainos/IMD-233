$(document).ready( function (){

  var state = "IDLE";
  var cmd= "";
  do{
    switch (state) {
      case "IDLE":
      {
        if(cmd === "next"){
          state = "S1";
        }
        document.getElementById("mState").innerHTML = state;
      }
        break;

      case "S1":
      {
        if(cmd === "next"){
          state = "S2";
        }
        document.getElementById("mState").innerHTML = state;
      }
        break;

      case "S2":
      {
        if(cmd === "next"){
          state = "S3";
        }
        document.getElementById("mState").innerHTML = state;
      }
        break;

      case "S3":
      {
        if(cmd === "next"){
          state = "S4";
        }
        document.getElementById("mState").innerHTML = state;
      }
        break;

      case "S4":
      {
        if(cmd === "next"){
          state = "S1";
        }
        document.getElementById("mState").innerHTML = state;
      }
        break;
    }
    cmd = prompt('Enter a command:' + state, 'next');
  }while((cmd != 'exit') && (cmd != 'quit'));

});
