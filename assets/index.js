// -------------------------------- Sound Call ---------------------------------- //
$(document).ready(function () {

    let audio = new Audio("assets/sounds/Saint-Peters-Greeting.mp3");
    audio.volume = 0.7;
    audio.play();

    $("#disclaimer").delay(10000).hide(10000);

    // creating an array of the images in the images folder
    var lunaImages = new Array;

    lunaImages[0] = new Image;
    $(lunaImages[0]).addClass("lunaImage zero");
    $(lunaImages[0]).attr("src", "assets/images/Luna/Luna-Animal-Prints.jpg");
    $(lunaImages[0]).attr("id", "img-1");
    $(lunaImages).append(lunaImages[0]);

    lunaImages[1] = new Image;
    $(lunaImages[1]).addClass("lunaImage one");
    $(lunaImages[1]).attr("src", "assets/images/Luna/Luna-Blue-Frankenbride.jpg");
    $(lunaImages[1]).attr("id", "img-2");
    $(lunaImages).append(lunaImages[1]);

    lunaImages[2] = new Image;
    $(lunaImages[2]).addClass("lunaImage two");
    $(lunaImages[2]).attr("src", "assets/images/Luna/Luna-Blue-Glasses.jpg");
    $(lunaImages[2]).attr("id", "img-3");
    $(lunaImages).append(lunaImages[2]);

    lunaImages[3] = new Image;
    $(lunaImages[3]).addClass("lunaImage three");
    $(lunaImages[3]).attr("src", "assets/images/Luna/Luna-Color-Block.jpg");
    $(lunaImages[3]).attr("id", "img-4");
    $(lunaImages).append(lunaImages[3]);

    lunaImages[4] = new Image;
    $(lunaImages[4]).addClass("lunaImage four");
    $(lunaImages[4]).attr("src", "assets/images/Luna/Luna-Emerald-Leopard.jpg");
    $(lunaImages[4]).attr("id", "img-5");
    $(lunaImages).append(lunaImages[4]);

    lunaImages[5] = new Image;
    $(lunaImages[5]).addClass("lunaImage five");
    $(lunaImages[5]).attr("src", "assets/images/Luna/Luna-Face-Print.jpg");
    $(lunaImages[5]).attr("id", "img-6");
    $(lunaImages).append(lunaImages[5]);

    lunaImages[6] = new Image;
    $(lunaImages[6]).addClass("lunaImage six");
    $(lunaImages[6]).attr("src", "assets/images/Luna/Luna-Flower-Bow-Glasses.jpg");
    $(lunaImages[6]).attr("id", "img-7");
    $(lunaImages).append(lunaImages[6]);

    lunaImages[7] = new Image;
    $(lunaImages[7]).addClass("lunaImage seven");
    $(lunaImages[7]).attr("src", "assets/images/Luna/Luna-Frankenstein.jpg");
    $(lunaImages[7]).attr("id", "img-8");
    $(lunaImages).append(lunaImages[7]);

    lunaImages[8] = new Image;
    $(lunaImages[8]).addClass("lunaImage eight");
    $(lunaImages[8]).attr("src", "assets/images/Luna/Luna-Green-Scales.jpg");
    $(lunaImages[8]).attr("id", "img-9");
    $(lunaImages).append(lunaImages[8]);

    lunaImages[9] = new Image;
    $(lunaImages[9]).addClass("lunaImage nine");
    $(lunaImages[9]).attr("src", "assets/images/Luna/Luna-Kaleidoscope.jpg");
    $(lunaImages[9]).attr("id", "img-10");
    $(lunaImages).append(lunaImages[9]);

    lunaImages[10] = new Image;
    $(lunaImages[10]).addClass("lunaImage ten");
    $(lunaImages[10]).attr("src", "assets/images/Luna/Luna-Lavender-Shoulder.jpg");
    $(lunaImages[10]).attr("id", "img-11");
    $(lunaImages).append(lunaImages[10]);

    lunaImages[11] = new Image;
    $(lunaImages[11]).addClass("lunaImage eleven");
    $(lunaImages[11]).attr("src", "assets/images/Luna/Luna-Lichtenstein.jpg");
    $(lunaImages[11]).attr("id", "img-12");
    $(lunaImages).append(lunaImages[11]);

    lunaImages[12] = new Image;
    $(lunaImages[12]).addClass("lunaImage twelve");
    $(lunaImages[12]).attr("src", "assets/images/Luna/Luna-Magenta-Astronaut.jpg");
    $(lunaImages[12]).attr("id", "img-13");
    $(lunaImages).append(lunaImages[12]);

    lunaImages[13] = new Image;
    $(lunaImages[13]).addClass("lunaImage thirteen");
    $(lunaImages[13]).attr("src", "assets/images/Luna/Luna-Orange-Spiderweb.jpg");
    $(lunaImages[13]).attr("id", "img-14");
    $(lunaImages).append(lunaImages[13]);

    lunaImages[14] = new Image;
    $(lunaImages[14]).addClass("lunaImage fourteen");
    $(lunaImages[14]).attr("src", "assets/images/Luna/Luna-Pink-Glamourfish.jpg");
    $(lunaImages[14]).attr("id", "img-15");
    $(lunaImages).append(lunaImages[14]);

    lunaImages[15] = new Image;
    $(lunaImages[15]).addClass("lunaImage fifteen");
    $(lunaImages[15]).attr("src", "assets/images/Luna/Luna-Face-Print-Spooky.jpg");
    $(lunaImages[15]).attr("id", "img-16");
    $(lunaImages).append(lunaImages[15]);

    lunaImages[16] = new Image;
    $(lunaImages[16]).addClass("lunaImage sixteen");
    $(lunaImages[16]).attr("src", "assets/images/Luna/Luna-Planet-Rings.jpg");
    $(lunaImages[16]).attr("id", "img-17");
    $(lunaImages).append(lunaImages[16]);

    lunaImages[17] = new Image;
    $(lunaImages[17]).addClass("lunaImage seventeen");
    $(lunaImages[17]).attr("src", "assets/images/Luna/Luna-Polaroid-Ribbon.jpg");
    $(lunaImages[17]).attr("id", "img-18");
    $(lunaImages).append(lunaImages[17]);

    lunaImages[18] = new Image;
    $(lunaImages[18]).addClass("lunaImage eighteen");
    $(lunaImages[18]).attr("src", "assets/images/Luna/Luna-Purple-Frankenbride.jpg");
    $(lunaImages[18]).attr("id", "img-19");
    $(lunaImages).append(lunaImages[18]);

    lunaImages[19] = new Image;
    $(lunaImages[19]).addClass("lunaImage nineteen");
    $(lunaImages[19]).attr("src", "assets/images/Luna/Luna-Pink-Spiderweb.jpg");
    $(lunaImages[19]).attr("id", "img-20");
    $(lunaImages).append(lunaImages[19]);

    lunaImages[20] = new Image;
    $(lunaImages[20]).addClass("lunaImage twenty");
    $(lunaImages[20]).attr("src", "assets/images/Luna/Luna-Voodoo-Queen.jpg");
    $(lunaImages[20]).attr("id", "img-21");
    $(lunaImages).append(lunaImages[20]);

    lunaImages[21] = new Image;
    $(lunaImages[21]).addClass("lunaImage twentyOne");
    $(lunaImages[21]).attr("src", "assets/images/Luna/Luna-Purple-Fuschia-Futurustic.jpg");
    $(lunaImages[21]).attr("id", "img-22");
    $(lunaImages).append(lunaImages[21]);

    lunaImages[22] = new Image;
    $(lunaImages[22]).addClass("lunaImage twentyTwo");
    $(lunaImages[22]).attr("src", "assets/images/Luna/Luna-Rose-Lace.jpg");
    $(lunaImages[22]).attr("id", "img-23");
    $(lunaImages).append(lunaImages[22]);

    lunaImages[23] = new Image;
    $(lunaImages[23]).addClass("lunaImage twentyThree");
    $(lunaImages[23]).attr("src", "assets/images/Luna/Luna-Wave.jpg");
    $(lunaImages[23]).attr("id", "img-24");
    $(lunaImages).append(lunaImages[23]);

    lunaImages[24] = new Image;
    $(lunaImages[24]).addClass("lunaImage twentyFour");
    $(lunaImages[24]).attr("src", "assets/images/Luna/Luna-YSL-Body-Dress.jpg");
    $(lunaImages[24]).attr("id", "img-25");
    $(lunaImages).append(lunaImages[24]);

    $(".index").append(lunaImages);
    $(lunaImages).hide();

    console.log(lunaImages);

    $(lunaImages[0]).fadeIn(3500);
    $(lunaImages[1]).delay(2500).fadeIn(2500);
    $(lunaImages[2]).delay(4000).fadeIn(2400);
    $(lunaImages[3]).delay(5400).fadeIn(2300);
    $(lunaImages[4]).delay(6700).fadeIn(2200);
    $(lunaImages[5]).delay(7900).fadeIn(2100);
    $(lunaImages[6]).delay(9000).fadeIn(2000);
    $(lunaImages[7]).delay(10000).fadeIn(1900);
    $(lunaImages[8]).delay(10900).fadeIn(1800);
    $(lunaImages[9]).delay(11700).fadeIn(1700);
    $(lunaImages[10]).delay(12400).fadeIn(1600);
    $(lunaImages[11]).delay(13000).fadeIn(1500);
    $(lunaImages[12]).delay(13500).fadeIn(1400);
    $(lunaImages[13]).delay(14000).fadeIn(1300);
    $(lunaImages[14]).delay(14500).fadeIn(1200);
    $(lunaImages[15]).delay(15000).fadeIn(1100);
    $(lunaImages[16]).delay(15500).fadeIn(1000);
    $(lunaImages[17]).delay(16000).fadeIn(900);
    $(lunaImages[18]).delay(16500).fadeIn(800);
    $(lunaImages[19]).delay(17000).fadeIn(700);
    $(lunaImages[20]).delay(17500).fadeIn(600);
    $(lunaImages[21]).delay(18000).fadeIn(500);
    $(lunaImages[22]).delay(18500).fadeIn(500);
    $(lunaImages[23]).delay(19000).fadeIn(500);
    $(lunaImages[24]).delay(19500).fadeIn(500);

    $(window).on("click", function () {
        audio.stop();
        $(".index").append(lunaImages);
    });

});



// Getting Modal JS Here //







