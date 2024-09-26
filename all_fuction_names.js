//1. The Fucntion of Declaration


function fucntionName(firstNmae, lastName) {
    const fullName = firstNmae + lastName;
}

// 1.1 Named Paramiter 

function person({ firstName, lastName, age, address = {} }) {
    const person = {
        fullName: firstName + " " + lastName,
        age: age,
        address: address
    };
    return person;
}


const person_1 = person({
    firstName: "Md",
    lastName: "Parvez",
    age: 25,
    address: {
        street: "GoalDubi, Charbangdanga",
        city: "Chapai Nawabganj",
        state: "Rajshahi"
    }
}
)


// console.log(person_1);


//1.2 optional parameters function 



function email(names_part, domine_part = "@gmail.com") {
    const mail = names_part + domine_part;
    return mail;
}

// console.log(email("parveztarek4")); //output: parveztarek4@gmail.com


// console.log(email("parvezalitarek4", "@yahoo.com")); //output: parvezalitarek4@yahoo.com



// We will generate the combinning named and optional Paremeters 
// Next we will generate the combinning Paremeters Fuctiona 





//2. Function Expression

//Example One
const add=function (a,b){
    return a+b;
}

//Example Two
const person_2 = function ({ name, age, className, gread }) {
    const person = {
        name: name,
        age: age,
        className: className
        , gread: gread
    }
    return person;
}


const selim = person_2({
    name: "Selim",
    age: 25,
    className: "12th",
    gread: "A+"
})

// console.log(selim);



//3.  Arrow Fucntions



//example i

const multiply=(a,b)=> a*b;

 //exaple ii
 const person_3 = ({ name, age, className, gread }) => ({
    name,
    age,
    className,
    gread
})

//example iii

const greet=()=>"Hello, Programmer!";

// console.log(greet());


const selim_2=person_3({name:"Md Parvez", age:25, className:"12 th", gread:"A"})

// console.log(selim_2);



//Function Anonymous 
// This  also use for JS DOM. In our Website doing dynamic 

//example a,

setTimeout(function(){
    console.log("Hello, Programmer!");
}, 1000)