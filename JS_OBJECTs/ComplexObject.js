let obj = 
{
    name:'Sandesh',
    tech:'JavaScript',
    laptop:
    {
        Brand:'Dell',
        CPU :'I7',
    }
}
console.log(obj)
// for (let key in obj.laptop)
// {
//     console.log(key , obj.laptop[key])
// }


for(let key in obj)
{
    console.log(key,obj[key])
}

console.log(obj.laptop)
console.log(obj['laptop']['Brand'])