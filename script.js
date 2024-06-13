// Declare variables below to save the different divs of your story.
let startbtn = document.querySelector("#startbtn")
let homepage = document.querySelector(".homepage")
let dungeonlvl1 = document.querySelector(".dungeonlvl1")
let dungeonlvl2_1 = document.querySelector("dungeonlvl2-1")
let door1 = document.querySelector("#door1")
let door2 = document.querySelector("#door2")
let door3 = document.querySelector("#door3")
let MC = document.querySelector(".MC")

// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


startbtn.addEventListener('click', function(){
    homepage.style.display= "none";
    dungeonlvl1.style.display= "flex";
    MC.style.display="flex";
});

door1.addEventListener('click', function(){
    dungeonlvl1.style.display="none";
    dungeonlvl2_1.style.display="flex";
});


// door2.addEventListener('click', function(){
//
// });

// door3.addEventListener('click', function(){
//
// });

// INSERT_VARIABLE.addEventListener('click', function(){
//
// });

// INSERT_VARIABLE.addEventListener('click', function(){
//
// });

// INSERT_VARIABLE.addEventListener('click', function(){
//
// });