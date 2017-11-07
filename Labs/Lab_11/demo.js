var mail = prompt("Enter your E-mail");
var password = prompt("Enter your Password");

console.log("Email: " + mail);
console.log("Password: " + password);

document.getElementById("userName").innerHTML = mail;
document.getElementById("pass").innerHTML = password;
