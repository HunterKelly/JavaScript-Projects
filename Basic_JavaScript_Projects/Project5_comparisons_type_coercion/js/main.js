document.write(typeof "Word" + " ");

document.write(typeof 3 + " ");

document.write("10" + 5 + " ");


function my_Function() {
    document.getElementById("Test").innerHTML = 0 / 0;
}

function my_Functionn() {
    document.getElementById("Test2").innerHTML = isNaN('This is a string');
}

function my_Functionnn() {
    document.getElementById("Test3").innerHTML = isNaN('007');
}

document.write(2E310 + " ");

document.write(-3E310 + " ");

document.write(10 > 2 + "  ");

document.write(10 < 2 + "  ");

console.log(2 + 2);

console.log(5 < 2);

document.write(10 == 10 + " ");

document.write(3 == 11 + " ");

var DateOfBirth1 = "1/1/1970";
var DateOfBirth2 = "1/1/1970";

document.write(DateOfBirth1 === DateOfBirth2);

X = 82;
Y = "82";

document.write(X === Y);

A = 82;
B = "Person";
document.write(A === B);

C = 82;
D = 85;

document.write(C == D);

document.write(5 > 2 && 10 > 4);

document.write(5 > 10 && 10 > 4);

document.write(5 > 10 || 10 > 4);

document.write(5 > 10 || 10 > 20);

function not_Function() {
    document.getElementById("Test4").innerHTML = !(20 > 10);
}
function notnot_Function() {
    document.getElementById("Test5").innerHTML = !(5 > 10);
}
