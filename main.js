function startClassification() {
    console.log("clissifing");
    navigator.mediaDevices.getUserMedia({audio: true});
     classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/3_SUYV209/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    } else{
        console.log(results);
        document.getElementById("type_animal").innerHTML = results[0].label;
        document.getElementById("type_animal_accuracy").innerHTML = (results[0].confidence*100).toFixed(2) +" %";

        img = document.getElementById("img");

        if (results[0].label == "Dogs") {
            img.src  = "bark.gif";
        } else if (results[0].label == "Meowing Cats") {
            img.src  = "meow.gif";
        } else {
            img.src="listen.gif";
        }
        console.log("All Function are Done");
    }
}