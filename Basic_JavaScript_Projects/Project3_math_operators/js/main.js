
var foo = document.getElementsByTagName("p");

function addition_function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_function() {
    var Subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2 = " + Subtraction;
} 

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math3").innerHTML = "6 * 8 = " + simple_Math;
}

function division() {
    var simple_Math = 48 / 6;
    document.getElementById("Math4").innerHTML = "48 / 6 = " + simple_Math;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math5").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtraced by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6, you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math7").innerHTML = -x;
}

function unary_Operator() {
    var x = 10
    document.getElementById("Math8").innerHTML = x + 5;
}

var x = 5;
x++;
document.write(x + " " ); 

var Y = 5.25;
Y--
document.write(Y);

window.alert(Math.random());
window.alert(Math.random() * 100);