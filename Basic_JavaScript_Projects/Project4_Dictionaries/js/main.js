function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

function two_Dictionary() {
    var Plant = {
        Species: "Oak", 
        Color: "Brown",
        Age: "300",
        Size: "20 meters",
        
    }
    delete Plant.Age;
    document.getElementById("Dictionary2").innerHTML = Plant.Age;
}