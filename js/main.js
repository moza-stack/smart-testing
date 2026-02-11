// document.getElementById("btn").addEventListener("click",

// function(){
//     alert("helooo")
// }


// )
// var x=45
// console.log(x,typeof(x));

// var y="moza"
// console.log(x,typeof(y));
// var z=true
// console.log(x,typeof(z));

// var i
// console.log(i);

// var fname= prompt("Enter first name")
// var Lname= prompt("Enter Lname")
// var Age= prompt("Enter Age")
// console.log(`hello my first name is ${fname} and my last name is ${Lname} and my Age is ${Age}`);

// var num1= +prompt("Enter any number")
// var num2= +prompt("Enter any number")
// console.log(num1+num2);
// var user={
//     name:"yahia",
//     ID:1825,
//     city:"Swiq",
//     Child:{
//         name:"Lalya",
//         gender:"Female",
//         Dob:"15-15-15",
//         skill:{
//             sport:"football",subject:"English"


//         }
//     }
// }
// //dot notation
// //index notation
// console.log(user.Child.skill.sport);
// var user1={
//     id:1825,
//     name:"Yahia",
//     Child:{
//         name:"fahad",
//         gender:"male",
//         skill:{
//             sport:"football",
//             writting:{
//                 story:"child"
//             }
//         }
//     }
// }
// console.log(user1["Child"]);
// var Flowers=["red", "blue", "gray",5433, "yellow"]
// console.log(Flowers[0]);
// console.log(Flowers[1]);
// console.log(Flowers[2]);
// console.log(Flowers[3]);
// console.log(Flowers[4]);
// var BigArray = [
// [[1,2,3],[1,2,3]],
// [[1,2,3],[1,2,3],["Talaal","Yousef"]],
// [["Ahemd","Eid","Saieed"],[1,2,3]],
// [["Mahmoud","Hassan","Soliman"],[1,2,3]],
// [[1,2,3],[1,2,3],[{name:"Monsef",id:[45,45,45,["SARA"]]}]],
// ]
// console.log(BigArray[3][0][2]);




// var x= Number(prompt("Enter Number"));
// var prime="false"

// for ( var i=2; i<x; i+=1) {
//     if(x % i== 0){
//         prime="true"
//         break;
//     }
// }
// if(prime=="false")

//       console.log("the number is primary");

//        else                                                                                                                
//         console.log("enter the valid number");



// sum=0;
// average=0;
// for(var i=1 ; i<=5 ; i+=1){
//     var mark = +(prompt("please Enter your mark"+i));

// console.log(" student "+i + " mark "+mark);
// if (mark>=50)
//         console.log(" student "+i +" pass ");
//     else
//     console.log(" student "+i +" fail ");}
// sum=sum+mark;
// average=sum/5;
// console.log(" total " + sum);
// console.log(" average " + average)

// for( var i=1 ; i<=100 ; i+=1){
//     if (i%3==0 && i%5==0){
//         console.log("fizzbuzz")}
//     else if(i%3==0){
//         console.log(" fizz")
//     }
//     else if(i%5==0){
//         console.log(" buzz")
//     }
//     else console.log(i)

// }
// for(var i=2 ; i<3 ; i++)
// {

//     console.log(i);

// }
//    for(  ;  ;   ){

//         var x = + (prompt("Enter number"))
//         if ( x==10 ) 
//              break

//         else{
//            console.log(x);
//             continue

//            } 

//     }


// var random =Math.floor(Math.random()*10 )
// console.log(random);


// var random =Math.floor(Math.random()*10 )
// for( ;  ; ){
// var x = + prompt("Enter number")
// if (x> random)
//     console.log("too cold")

// else if (x < random)
//     console.log("too hot")


// else{
// console.log("well done")

// break
// }

// }

// var userEmail = prompt("please Enter your Email")
// var userpass = prompt("please Enter your password")

// Hamoz=0

// while(userEmail != "Ahmed@gmail" || userpass!="12345A"){
// // alert("Invalid Email or password")
// Hamoz++

// if(Hamoz<=3){
//   userEmail = prompt("please Enter your Email")
//  userpass = prompt("please Enter your password")
// }
// else break


// }


// var userEmail = prompt("please Enter your Email")
// var userpass = prompt("please Enter your password")

// Hamoz=0

// while(userEmail != "Ahmed@gmail" || userpass!="12345A"){
// alert("invalid email or password")
// Hamoz++

// if(Hamoz<=3){
//   userEmail = prompt("please Enter your Email")
//  userpass = prompt("please Enter your password")
// }
// else {
//     alert("Try next time");
// break
// }

// if(Hamoz==3){
//     setTimeout(function (){
//         userEmail= prompt("please enter your Email again");
//         userpass= prompt("please enter your password again");
//     },5000);
//     }
// }


var userEmail = prompt("Enter Email")
var userPassword = prompt("Enter Password")
var number_of_tries = 0
while (userEmail != "aaaa" || userPassword != "45") {
    number_of_tries++
    if (number_of_tries < 3) {
        userEmail = prompt("Enter Email")
        userPassword = prompt("Enter Password")
    }
    else {
        alert("Tiy tried too many times")
        break
    }
}
if (userEmail == "aaaa" && userPassword == "45") {
    alert("Successfully logged in")
    var number_of_questions = +prompt("Please Enter Your Number of Questions")
    var operators = ["+", "-", "*", "/", "%"]
    var score = 0
}
for (var i = 1; i <= number_of_questions; i++) {
    var num1 = Math.floor(Math.random() * 10)
    var num2 = Math.floor(Math.random() * 10)
    var operation = operators[Math.floor(Math.random() * operators.length)]
    var userAnswer =+ prompt(`${ i }  ${ num1 } ${ operation } ${ num2 }=`);
}


var correctAnswer;

if (operation === "+") {
    correctAnswer = num1 + num2;
} else if (operation === "-") {
    correctAnswer = num1 - num2;
} else if (operation === "*") {
    correctAnswer = num1 * num2;
} else if (operation === "**") {
    correctAnswer = num1 ** num2;
} else if (operation === "/") {

    correctAnswer = num1 / num2;
} else if (operation === "%") {
    correctAnswer = num1 % num2;
}



if (userAnswer == correctAnswer) {
    score++;
}
{

alert("Your total score is: " + score + " out of " + number_of_questions);
}











