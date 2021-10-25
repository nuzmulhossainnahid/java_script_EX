// document.getElementById("demo").innerHTML = "Hello JavaScript!"
// function myFunction() {
//     document.getElementById("demo").innerHTML = "Paragraph changed.";
//   }
// function nahid(){
//     document.getElementById("h1").innerHTML="I am Nazmyul Hossain Nahid";
//     document.getElementById("h1").style.color="green";
// }
// function nahid1(){
//     document.getElementById("h1").innerHTML="I am Nahid";
//     document.getElementById("h1").style.color="red";
//     window.alert('Hellow');
//     // document.write("lorem100")
   
// }

// let a, b, c;
// a=10;
// b=5;
// c=a+b;
// console.log(c);

// function toCelsius(x) {
//     return (5/9) * (x -32);
//   }
// function button(){
//    var x= document.getElementById("input").value;
//    document.getElementById("h1").innerHTML = "The temperature is " + toCelsius(x) + " Celsius";
// }


// function love(){
//     let y = Math.floor(Math.random() * 101);
//     document.getElementById("h2").innerHTML = y;
//     document.getElementById("h2").style.color="green";

//    if(y<=50){
//     document.getElementById("cal").innerHTML="Not good Choice";
//     document.getElementById("cal").style.color="red";

//    }
//    else if(y<=80){
//     document.getElementById("cal").innerHTML="Good Choice";
//     document.getElementById("cal").style.color="blue";
//    }
//    else if(y<=100){
//     document.getElementById("cal").innerHTML="True Love";
//     document.getElementById("cal").style.color="green";

//    }

// }

var parson = {
firstName:"Nahid",
lastName: "Nazmul",
Age: 20,
};
document.getElementById("h1").innerHTML=parson.firstName +" Hasan "+parson.lastName;

// Create an object:
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
  
//   // Display some data from the object:
//   document.getElementById("h1").innerHTML =
//   person.firstName + " is " + person.age + " years old.";