$(document).ready(function () {

    let audio = new Audio("../assets/sounds/Saint-Peters-Greeting.mp3");
    audio.volume = 0.7;
    audio.play();

    var imageArray = ["../assets/images/Luna/Luna-Animal-Prints.jpg"]

    console.log(imageArray);
    $(".index").append(imageArray[0]);
});