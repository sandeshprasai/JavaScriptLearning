let marks = [85,97,44,37,76,60]
let avg =0 ;

for(let i of marks)
{
    avg=i+avg
}

console.log(avg/(marks.length))
