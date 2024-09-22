let arr = [1,2,3,4,5,6]
let array = [1,2,3,4]

let concat= arr.concat(array)
console.log(concat)

arr.push(7,8,9)     
console.log(arr)

console.log("Deleted Items " +arr.pop())
console.log(arr)


console.log(arr.toString())

arr.unshift(0)
console.log(arr)

arr.shift()
console.log(arr)

console.log(arr.slice(0,4))
console.log(arr.slice(3,9))

arr.splice(1,3,10,11,12)   // splice(start_index_to change, no_of_element_to_delete, new elements to add)
console.log(arr)    