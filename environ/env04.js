let environmentTitle = "Secret life of a Mermaid";

let environmentElements = ["Water", "Fish", "Seaweed"];

let mainEntity = {
    name: "Jasmine",
    mood: "relaxing",
    age: 18,
    features: "shadows",

    favoriteElement: environmentElements[2]
}

$("#name").click(function (){
    let message = mainEntity.name;
    $("#output").html(message);
});

$("#mood").click(function (){
    let message = mainEntity.mood;
    $("#output").html(message);
});

$("#age").click(function (){
    let message = mainEntity.age;
    $("#output").html(message);
});

$("#features").click(function (){
    let message = mainEntity.features;
    $("#output").html(message);
});

$("#background").click(function (){
    $("body").css("background-image", "url('Night.jpg')");
    $("#fish").attr("src", "https://www.disneyclips.com/images4/images/flounder11.png");
    $("#shell").remove();
    $("#output").html('<div class="sos">Silence lingers.</div>');
    $("#output").css("color", "yellow");
});

$("#Sunset").click(function (){
    $("body").css("background-image", "url('Sunset.jpg')");
    $("#fish").attr("src", "https://www.disneyclips.com/images4/images/flounder11.png");
    $("#shell").remove();
    $("#seaweed").remove();
    $("#fish").show();
    $("#output").html('<div class="pos">Vast ocean. </div>');
    $("#output").css("color", "yellow");
});