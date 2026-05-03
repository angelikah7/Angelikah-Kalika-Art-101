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