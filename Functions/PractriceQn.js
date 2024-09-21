// Intermediate Questions
// Arrow Functions: Rewrite the add function from question 2 using an arrow function.

// Default Parameters: Modify the greet function to accept an optional greeting message that defaults to "Hello".

// Higher-Order Function: Write a function applyOperation that takes a function and two numbers as arguments, and applies the function to those numbers.

// Advanced Questions
// Closure: Create a function counter that returns another function. The inner function should increment and return a count every time it is called.

// Callback Functions: Write a function fetchData that simulates fetching data (you can use setTimeout) and accepts a callback to handle the data once it’s "fetched".

// IIFE: What is an Immediately Invoked Function Expression (IIFE)? Write an example.

// Challenge Questions
// Function Composition: Write a function compose that takes two functions as arguments and returns a new function that is the composition of those two functions.

 // Currying: Write a curried version of the add function that can take its arguments one at a time.

// Define a Function: Write a function called greet that takes a name as an argument and logs "Hello, [name]!" to the console.

                                // function greet (name)
                                // {
                                //     console.log(`Hello ${name}`)
                                // }

                                // greet("Sandesh")


// Return Value: Create a function add that takes two numbers as arguments and returns their sum.

                                // function add (num1 , num2)
                                // {
                                //     return num1+num2
                                // }

                                // sum=add(10,20)
                                // console.log(sum)

// function Expression: Convert the following function declaration into a function expression:
// function multiply(a, b) {
//     return a * b;
// }


                                // var multiply =  function(a,b)
                                //                 {
                                //                     return a*b
                                //                 }
                                //     result = multiply(10,20)
                                //     console.log(result)



// // Arrow Functions: Rewrite the add function from question 2 using an arrow function.

                        // let add = (num1 , num2 )=>
                        // {
                        //     return num1+num2
                        // }

                        // let result =  add(10,20)
                        // console.log(result)    


// Default Parameters: Modify the greet function to accept an optional greeting message that defaults to "Hello".


                        // function greet(user="Sandesh")
                        // {
                        //     console.log(`Hello ${user}`)
                        // }

                        // greet("World");
                
// Higher-Order Function: Write a function applyOperation that takes a function and two numbers as arguments, and applies the function to those numbers.

                         // function applyOperation(funct,num1,num2)
                         // {
                         // return (funct(num1,num2))
                         // }

                         // function add( num1 , num2)
                         // {
                         //      return num1+num2 ;
                         // }

                         // let x = applyOperation(add , 10 ,20)
                         // console.log(x)

// Create a function counter that returns another function. The inner function should increment and return a count every time it is called.


                         // function counter()
                         // {
                         //      let count=0;
                         //      return function increment_count ()
                         //      {
                         //                count++;
                         //                return count;
                         //      }

                         // }

                         // let myCounter =counter();
                         // console.log(myCounter());
                         // console.log(myCounter());
                         // console.log(myCounter());
                         // console.log(myCounter());

