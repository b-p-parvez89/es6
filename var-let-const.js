// var changable 
//let changable
//const unchangeable

const numbers=[2,4,3,45,5,4,3,2];
numbers[2]=55;
numbers.push(322);

console.log(numbers);


// objects

const students={
    name: 'John Doe',
    age: 18,
    grade: 'A',
    subjects: ['Math', 'Science', 'English']
}


students.name="Parvez";
console.log(students);




// Loop


// for (const i = 0; i < 10; i++) {
   
//  //Type error const i::

// }

let sum=0;
for (let index = 1; index <= 100; index++) {
 sum=sum+index;
    
}