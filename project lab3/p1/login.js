var username = prompt("Enter Your Username");
var password = prompt("Enter Your Password");
if (username == "admin" && password == "421$$") {
    alert("Welcome! Login Success\n");
}
else if (username != "admin" && password == "421$$") {
    alert("Username Is Not Valid!\n");
}
else if (username == "admin" && password != "421$$") {
    alert("Password Entered Is Not Valid\n");
}
else {
    alert("Both Username and Password");
}