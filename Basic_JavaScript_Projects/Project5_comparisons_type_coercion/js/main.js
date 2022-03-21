document.write(typeof "Word");
document.write(typeof 3);
document.write("10" + 5);

function my_Function() {
    document.getElementById("Test").innerHTML = 0 / 0;
}

function my_Functionn() {
    document.getElementById("Test2").innerHTML = isNaN('This is a string');
}

function my_Functionnn() {
    document.getElementById("Test3").innerHTML = isNaN('007');
}

document.write(2E310);
document.write(-3E310);