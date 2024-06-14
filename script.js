// Declare variables below to save the different divs of your story.
let startbtn = document.querySelector("#startbtn");
let homepage = document.querySelector(".homepage");
let dungeonlvl1 = document.querySelector(".dungeonlvl1");
let dungeonlvl2_1 = document.querySelector(".dungeonlvl2_1");
let dungeonlvl2_2 = document.querySelector(".dungeonlvl2_2");
let door1 = document.querySelector("#door1");
let door2 = document.querySelector("#door2");
let door3 = document.querySelector("#door3");
let lvl1_MC = document.querySelector(".lvl1_MC");
let lvl2_MC = document.querySelector(".lvl2_MC");
let mc2 = document.querySelector("#mc2");
let attackbtn = document.querySelector(".attackbtn");
let attackbtn2 = document.querySelector(".attackbtn2");
let deathscreen = document.querySelector(".deathscreen");
let attackbtnimg = document.querySelector("#attackbtn");
let attackbtnimg2 = document.querySelector("#attackbtn2");
let tryagain = document.querySelector(".tryagain");
let tryagainbtn = document.querySelector("#tryagain");
let reward = document.querySelector(".reward");
let reward_mc = document.querySelector(".reward_mc");
let chest = document.querySelector("#reward");
let winner = document.querySelector(".winner")
let goagain = document.querySelector(".goagain");
let goagainbtn = document.querySelector("#goagain");
let door3rng = document.querySelector(".door3rng");



startbtn.addEventListener('click', function(){
    homepage.style.display= "none";
    dungeonlvl1.style.display= "flex";
    lvl1_MC.style.display="flex";
});

/*DOOR ONE STARTS HERE -------------------------------------------------------------------------------------------------------------------*/

door1.addEventListener('click', function(){
    dungeonlvl1.style.display="none";
    dungeonlvl2_1.style.display="flex";
    lvl1_MC.style.display="none";
    lvl2_MC.style.display="grid";
});

door1.addEventListener('mouseover', function(){
    door1.style.border="solid 3px yellow";
});

door1.addEventListener('mouseout', function(){
    door1.style.border="0px";
});

/*DOOR TWO STARTS HERE -------------------------------------------------------------------------------------------------------------------*/

door2.addEventListener('click', function(){
    dungeonlvl1.style.display="none";
    dungeonlvl2_2.style.display="flex";
    lvl1_MC.style.display="none";
    mc2.style.display="grid";
});

door2.addEventListener('mouseover', function(){
    door2.style.border="solid 3px yellow";
});

door2.addEventListener('mouseout', function(){
    door2.style.border="0px";
});

/*DOOR THREE STARTS HERE -----------------------------------------------------------------------------------------------------------------*/

door3.addEventListener('click', function(){
    dungeonlvl1.style.display="none";
    if (Math.floor(Math.random() * 11) < 9) {
        deathscreen.style.display="flex";
        door3rng.style.display="flex";
    } else {
        reward.style.display="flex";
        reward_mc.style.display="flex";
    }
});

door3.addEventListener('mouseover', function(){
    door3.style.border="solid 3px yellow";
});

door3.addEventListener('mouseout', function(){
    door3.style.border="0px";
});

/*Attack button 1  -----------------------------------------------------------------------------------------------------------------------*/

attackbtn.addEventListener('click', function() {
    dungeonlvl2_1.style.display="none";
    if (Math.floor(Math.random() * 101) < 75) {
        deathscreen.style.display="flex";
    } else {
        reward.style.display="flex";
        reward_mc.style.display="flex";
    }
});

attackbtn.addEventListener('mouseover', function() {
    attackbtnimg.style.border="3px yellow solid";
});

attackbtn.addEventListener('mouseout', function() {
    attackbtnimg.style.border="0px";
});

/*Attack button 2  -----------------------------------------------------------------------------------------------------------------------*/

attackbtn2.addEventListener('click', function() {
    dungeonlvl2_2.style.display="none";
    if (Math.floor(Math.random() * 101) > 75) {
        deathscreen.style.display="flex";
    } else {
        reward.style.display="flex";
        reward_mc.style.display="flex";
    }
});

attackbtn2.addEventListener('mouseover', function() {
    attackbtnimg2.style.border="3px yellow solid";
});

attackbtn2.addEventListener('mouseout', function() {
    attackbtnimg2.style.border="0px";
});


/*Try again button  ----------------------------------------------------------------------------------------------------------------------*/

tryagain.addEventListener('click', function() {
    homepage.style.display="flex";
    deathscreen.style.display="none";
    door3rng.style.display="none";
});

tryagain.addEventListener('mouseover', function() {
    tryagainbtn.style.border="3px yellow solid";
    tryagain.style.border="0px";
});

tryagain.addEventListener('mouseout', function() {
    tryagainbtn.style.border="0px";
    tryagain.style.border="3px white solid";
});

/*Chest effects  -------------------------------------------------------------------------------------------------------------------------*/

chest.addEventListener('click', function() {
    winner.style.display="flex";
    reward.style.display="none";
    reward_mc.style.display="none";
});

chest.addEventListener('mouseover', function() {
    chest.style.border="3px yellow solid";
});

chest.addEventListener('mouseout', function() {
    chest.style.border="0px";
});

/* Go again  ------------------------------------------------------------------------------------------------------------------------*/

goagain.addEventListener('click', function() {
    homepage.style.display="flex";
    winner.style.display="none";
});

goagain.addEventListener('mouseover', function() {
    goagainbtn.style.border="3px yellow solid";
    goagain.style.border="0px";
});

goagain.addEventListener('mouseout', function() {
    goagainbtn.style.border="0px";
    goagain.style.border="3px white solid";
});