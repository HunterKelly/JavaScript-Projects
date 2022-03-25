alert(document.getElementById("p1").innerHTML);

function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

function Call_Loop() {
    var Y = 0;
    var Z = "";
    while (Y < 11) {
        Z += "Never gonna give you up! "
        Y++;
    }
    document.getElementById("loop").innerHTML = Z;
}

let A = "Hello World!";
let B = A.length;
document.getElementById("length").innerHTML = B;