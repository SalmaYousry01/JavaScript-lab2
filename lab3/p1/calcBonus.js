var result = 0;
var isValid = true;

var num1 = parseInt(prompt("Enter The First Number"));

while (isValid) {
    var op = parseInt(prompt("Choose Operation From The Following:\n1.Sum\n2.Multiplication\n3.Subtraction\n4.Division\n5.Moduls"));


    switch (op) {
        case 1:
            var num2 = parseInt(prompt("Enter The Second Number"));
            result = sum(num1, num2);
            alert(`Sum = ${result}`);
            var isValid = false;
            break;

        case 2:
            var num2 = parseInt(prompt("Enter The Second Number"));
            result = multi(num1, num2);
            alert(`Multiplication = ${result}`);
            var isValid = false;
            break;

        case 3:
            var num2 = parseInt(prompt("Enter The Second Number"));
            result = subtract(num1, num2);
            alert(`Subtracion = ${result}`);
            var isValid = false;
            break;

        case 4:
            var num2 = parseInt(prompt("Enter The Second Number"));
            result = division(num1, num2);
            alert(`Division = ${result}`);
            var isValid = false;
            break;

        case 5:
            var num2 = parseInt(prompt("Enter The Second Number"));
            result = moduls(num1, num2);
            alert(`Modlus = ${result}`);
            var isValid = false;
            break;

        default:
            alert("Invalid Choice, Please Enter A Number From (1-5)");
            var isValid = true;

    }
}


var opConfirm = confirm("Do You Want To Make Any Other Operation On The Result?");
while (opConfirm) {
    var isValid = true;
    while (isValid) {
        var op = parseInt(prompt("Choose Operation From The Following:\n1.Sum\n2.Multiplication\n3.Subtraction\n4.Division\n5.Moduls"));

        switch (op) {
            case 1:
                var num = parseInt(prompt("Enter The Second Number"));
                result = sum(result, num);
                alert(`Sum = ${result}`);
                var isValid = false;
                break;

            case 2:
                var num = parseInt(prompt("Enter The Second Number"));
                result = multi(result, num);
                alert(`Multiplication = ${result}`);
                var isValid = false;
                break;

            case 3:
                var num = parseInt(prompt("Enter The Second Number"));
                result = subtract(result, num);
                alert(`Subtracion = ${result}`);
                var isValid = false;
                break;

            case 4:
                var num = parseInt(prompt("Enter The Second Number"));
                result = division(result, num);
                alert(`Division = ${result}`);
                var isValid = false;
                break;

            case 5:
                var num = parseInt(prompt("Enter The Second Number"));
                result = moduls(result, num);
                alert(`Modlus = ${result}`);
                var isValid = false;
                break;

            default:
                alert("Invalid Choice, Please Enter A Number From 1-5");
                var isValid = true;

        }
    }
    var opConfirm = confirm("Do You Want To Make Any Other Operation On The Result?");
}


function sum(num1, num2) {
    return num1 + num2;
}

function multi(num1, num2) {
    return num1 * num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function division(num1, num2) {
    return num1 / num2;
}

function moduls(num1, num2) {
    return num1 % num2;
}