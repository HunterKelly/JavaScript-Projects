function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "" || x =="John") {
        alert("Name must be filled out");
        return false;
    }
}

function openForm() {
    document.getElementById("myForm2").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm2").style.display = "none";
}

$("#slideshow > div:gt(0)").hide();

setInterval(function () {
    $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
}, 3000);

