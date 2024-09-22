// create an array to store company names  -> " Bollmberg ", "Microsoft", "Uber","Google","IBM","netflix"

let company = [" Bollmberg ", "Microsoft", "Uber","Google","IBM","netflix"]

console.log("original array")
console.log(company)

console.log("Array after some operation")

// remove the first companf form array

 company.shift()
console.log(company)

// remove uber and add ola in its place

company.splice(1,1,"Ola")

console.log(company)

// add amazon at the end

company.push("Amazon")
console.log(company)