// Write a function that filters out the even numbers from the array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenArray= numbers.filter((numbers)=> numbers%2==0
    
    
)

console.log(evenArray)

// Write a function that filters out all words with a length greater than 4 characters.
const words = ['apple', 'banana', 'pear', 'peach', 'cherry', 'kiwi'];

const filteredWords= words.filter((words)=> (words.length>4) )
console.log(filteredWords)

// Write a function that filters out the negative numbers from the array.
const nums = [-10, -5, 0, 5, 10, 15, -3, 8];

const positiveNums=  nums.filter((nums)=> nums>=0 )
console.log(positiveNums)

// Write a function that filters out people who are under 18 years old.

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 },
    { name: 'David', age: 15 }
  ];

  const ageFiltered  =  people.filter((people)=> people.age>18)
  console.log(ageFiltered)

// Write a function that filters the array and returns only the strings that contain the substring 'java'
const programmingLanguages = ['javascript', 'python', 'java', 'c++', 'typescript', 'ruby'];
 const containjava =  programmingLanguages.filter((programmingLanguages)=> programmingLanguages.includes('java'))
 console.log(containjava)
 
//  Write a function that filters the array and returns only the boolean values (true or false).

const mixedValues = [true, false, 0, 1, '', 'hello', null, undefined];

const boolValues  =  mixedValues.filter((values)=>  typeof(values) == 'boolean'
)
console.log(boolValues)

// Write a function that filters the array and returns only the unique values.

const numbersArr = [1, 2, 3, 4, 1, 2, 5, 6, 3]
const uniqueNum =  numbersArr.filter((values,index)=> numbersArr.indexOf(values)== index

)

console.log(uniqueNum) 

// Write a function that filters products priced over 500 and have a weight under 1kg.
const products = [
    { name: 'laptop', price: 1000, specs: { weight: 1.5, color: 'silver' } },
    { name: 'phone', price: 600, specs: { weight: 0.5, color: 'black' } },
    { name: 'tablet', price: 800, specs: { weight: 0.7, color: 'gold' } },
    { name: 'smartwatch', price: 200, specs: { weight: 0.2, color: 'white' } }
  ];
  
const filteredProducts =  products.filter((values)=>

    {
        return (values.price>500 && values.specs.weight<1 )
    }

)

console.log(filteredProducts)

// Write a function that filters out students with a grade above 80 and attendance above 85.
const students = [
    { name: 'John', grade: 85, attendance: 90 },
    { name: 'Jane', grade: 92, attendance: 95 },
    { name: 'Jake', grade: 70, attendance: 80 },
    { name: 'Jill', grade: 88, attendance: 85 },
    { name: 'Jack', grade: 65, attendance: 70 }
  ];

  const filteredStudents = students.filter((values)=> values.grade>80 && values.attendance>85 )
  console.log(filteredStudents);

//   Write a function that filters and returns only the prime numbers from the array.

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15,16,17];
const primeNum =  num.filter((values)=> 

    {
            if (values == 1 || values == 2 )
                return values

            else
                {
                    let flag =0
                    for (let i =2 ; i<values/2 ;i++)
                    {
                        if(values%i==0)
                            flag++

                    }

                    if(flag==0)
                        return values

    
                 }           
}

)

console.log(primeNum)