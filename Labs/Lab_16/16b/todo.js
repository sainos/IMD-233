//var todos = document.querySelector("ul");

var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++){
   //console.log(this.id);
   lis[i].addEventListener("mouseover", function(){
     this.id = "selected";
     this.innerHTML = "Focused!";
     console.log("mouseover");
   });

   lis[i].addEventListener("mouseout", function(){
    var temp = document.getElementById("selected");
    temp.innerHTML = "Not Focused";
    temp.id = "deselected";
    console.log("mouseout");
   });

   lis[i].addEventListener("click", function(){
      console.log("clicked");
   });
}
