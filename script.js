// // let x = 50;
// // let y = 20;
 
// // result = x+y;

// // document.getElementById("result").innerHTML= "The result is="+result;

function sum(){
    event.preventDefault();
    let x = document.getElementById("number1").value;
    let y = document.getElementById("number2").value; 
    
    // console.log(x);
    // console.log(y);
    // let result = x+y;
    let result = parseFloat(x)+parseFloat(y);

document.getElementById("result").innerHTML= "The result is="+result;
}
