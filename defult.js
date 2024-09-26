//create a Defult value


function add(num1, num2=0){
    const result=num1+num2;

    console.log(num1, num2, result);
    return result;
    
}

// const sum=add(5,10); //5 10 15

const sum= add(5);
const summ=add();