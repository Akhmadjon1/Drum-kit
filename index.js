
// Detecting Button Press


var buttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < buttons ; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
    var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);


    });
    
}

// Detecting Keyboard Press

document.addEventListener("keypress", function(event){

    makeSound(event.key);

    buttonAnimation(event.key);

});



function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break; 
        
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break; 

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break; 

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();

           default: console.log(buttonInnerHTML);
    }

}

function buttonAnimation(currentKey) {

    var avtiveButton = document.querySelector("." + currentKey);

    avtiveButton.classList.add("pressed");

    setTimeout(function() {
        avtiveButton.classList.remove("pressed");
    }, 100);

}










// function HouseKeeper(yearsOfExperince, name, cleaningReportoire) {
//     this.yearsOfExperince = yearsOfExperince;
//     this.name = name;
//     cleaningReportoire = cleaningReportoire;
//     this.clean = function () {
//         alert("cleaning is ion progress....");
        
//     }
 
// }

// var houseKeeper1 = new HouseKeeper(4, "Azi", ["cleaning"]);

// console.log(houseKeeper1.clean);
