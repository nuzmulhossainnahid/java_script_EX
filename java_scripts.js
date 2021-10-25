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

function toCelsius(x) {
    return (5/9) * (x -32);
  }
function button(){
   var x= document.getElementById("input").value;
   document.getElementById("h1").innerHTML = "The temperature is " + toCelsius(x) + " Celsius";
}
