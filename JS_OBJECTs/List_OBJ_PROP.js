let student = 
{
    name : 'Sandesh',
    sclass: 'Bachelor',
    rollno: 210328,
}

    // 1.Write a JavaScript program to list the properties of a JavaScript object.

// for(let key in student)
// {
//     console.log(key)
// }

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.


// console.log("Keys before deleting roll no")
//     for(let key in student)
//     {
//         console.log(key)
//     }
//     delete student.rollno
//     console.log("Key after deleting the roll no ")

//     for(let key in student)
//     {
//         console.log(key)
//     }

// 3.Write a JavaScript program to get the length of a JavaScript object.
var len=0
for(let key in student)
{
    len++;
}
console.log(len)