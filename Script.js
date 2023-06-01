let q1 = document.getElementById("text");
console.log(q1.innerHTML);
q1.innerHTML = "New Text.";
let q2 = document.getElementsByTagName("h1")[0];
console.log(q2);
q2.style.color = "blue";
let q3 = document.getElementsByClassName("box");
console.log(q3);
q3[0].style.backgroundColor = "yellow";
let q4 = document.getElementsByTagName("h1")[1];
q4.innerHTML = "Hello World";

function newText() {
    document.getElementById("Replace").innerHTML = "Welcome to Elevation academy";
}

let q6 = document.getElementsByTagName('h1')[2];
console.log(q6);
q6.style.color="red";
q6.setAttribute("id", "heading");
console.log(q6);

function flex() {
    let flex = document.getElementById("main");
    if(flex.style.flexDirection === "row"){
        flex.style.flexDirection = "column";
    }
    else{
        flex.style.flexDirection = "row";
    }
}

function clock(){
    let time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let clock = hour.toString().padStart(2, '0')+" Hours "+ ':' + 
        minutes.toString().padStart(2, '0')+" Minutes "+ ':' +
        seconds.toString().padStart(2, '0')+" Seconds ";
    document.getElementById("clock").textContent = clock;
}
setInterval(clock, 1000);