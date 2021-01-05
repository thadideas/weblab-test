/*yo notes!1-5-21
IDEATION AND JS!!
-----------
what concepts make a viable product
diverge, converge, diverge, converge
1. blue sky --> lots, rough <tag yourself>
    Problem/Audience/Feature/Theme
    moodboard
    don't judge
    tinder but...
2. uh smthsmthsmth
    what is good, what is bad
3. Transition to viable product
    focus on BASIC concepts and features
    work toward simple MVP feat. killer features
    can we make this more interesting (gameify)
----------
HTML, content and structure
CSS, presentation
JS, manipulate content for interactivity

5 primitive types
boolean, number, string, null, undefined
    default value is undefined
    null is explicitly empty (use to clear)
camelCase your variables
end statements with semicolon
*/
let variable1 = true;
let variable2 = 12;
let variable3 = "Hello World!";
const myConstant = "fixed";
console.log(variable1);
alert("alert text popup");
let array1 = ["thing", 7, 12, "other thing"]; //generally mixing types is suboptimal
console.log(array1[3]);
//outputs "other thing"
array1[2]=5; // 12 -> 5
array1.pop(); // removes from end
array1.push("thunder");//adds to end
array1.map(x => x * 3); //runs function on every element of starting array
array1.filter(x => x > 0) //removes things that don't agree
if(variable2 > 10){
    console.log("thunder");
}else if(variable2 > 11){
    console.log("lightning");
}else{
    consle.log("else");
}

let z = 1;
while (z < 1000){
    z = z * 2;
    console.log(z);
}

for (let i = 0; i < array1.length; i++){
    console.log(array1[i]);
}

//FUNCTIONS
// use () to use multiple output params ex. (tempC,time,etc)
const celsiusToFarenheit = tempC =>{
    const tempF = tempC * 1.8 + 32;
    return tempF;
};

//CALLBACK FUNCTIONS,
//pass function as argument into another function

//ANONYMOUS FUNCTIONS
//don't declare function, just run raw as callback

//OBJECTS (classes are also a thing)
const myRide = {
    name : "Millennium Force",
    year : 2000,
    tags : ["Intamin","Blue"]
};
console.log(myRide.name);//or myRide["name"]
//object destructuring is a thing
// === checks for sameness, need to be same array or object, stored in same place (referenced)

//Copying things, use spread operator ...
let arr = [1,2,3];
let copy = [...arr];

//JS and DOM! (Document Object Model)
//use IDs and script tag <script src = "filename"></script>
let headerDiv = document.getElementById("header");
headerDiv.innerHTML = "yeet";
headerDiv.style.color = "red";
// window exists

