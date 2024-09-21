// let object = 
// {
//         name: 'Sandesh',
//         age: 21,
//         greet: function()
//                 {
//                     console.log(`Hello ${this.name} Age ${this.age}`)
//                 }

// }

// for( let key in object)
// {
//     console.log(key, object[key])
// }
// object.greet()

// let object = 
// {
//         name: 'Sandesh',
//         age: 21,
//         greet: function()
//                 {
//                    return (`Hello ${this.name} Age ${this.age}`)
//                 }

// }

// for( let key in object)
// {
//     console.log(key, object[key])
// }
// x=object.greet()
// console.log(x)


let object = 
{
        name: 'Sandesh',
        age: 21,
        greet: function(user )
                {
                   return (`Hello ${user} Age ${this.age}`)
                }

}

for( let key in object)
{
    console.log(key, object[key])
}
x=object.greet('Dai')
console.log(x)