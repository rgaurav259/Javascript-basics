
function sayMyName(){
    console.log("G");
    console.log("A");
  
}

 sayMyName()

 function addTwoNumbers(number1, number2){

    console.log(number1 + number2);
}

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));




// function handson

const obj1= {
    name:"gaurav",
    age:23    
};

function getNameAndAge(valObject){

    console.log(`name is ${valObject.name} and age is ${valObject.age}`);
    return `name is ${valObject.name} and age is ${valObject.age}`
}

//call functions
 let valueofFunctions = getNameAndAge(obj1);
 console.log(valueofFunctions);

 //you can pass array as well

 let ar = [90,1,2,3,4,5];
 function passArrayDataFunctions(myarr){
    return [myarr[0]];
 }

 let valArrayDatareturn = passArrayDataFunctions(ar);
 console.log(valArrayDatareturn);
