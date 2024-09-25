let arr = [1,2,3,4,5]

let SquareArr= arr.map((val)=> val*val)

console.log(SquareArr)


// Given an array of numbers, create a new array that contains the string representation of each number.


let strArr= arr.map((value)=> value.toString() )
console.log(strArr)


    // Given an array of objects representing people, create a new array that contains only their names.
    const people = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 35 }
    ];

    let nameArr = people.map((value)=> 
    {
            return value.name
    }
    ) 
    console.log(nameArr)
  
    // Given an array of strings, create a new array that contains the length of each string.
    const fruits = ['apple', 'banana', 'cherry'];
    let lengthArr =  fruits.map((value)=> value.length)
    console.log(lengthArr)


    // Given an array of objects with firstName and lastName, create a new array of full names.
    const users = [
        { firstName: 'John', lastName: 'Doe' },
        { firstName: 'Jane', lastName: 'Smith' }
      ];
    let fullName = users.map((value)=>value.firstName.concat(value.lastName))
    console.log(fullName)  

