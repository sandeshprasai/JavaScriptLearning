let items_price=[250,645,300,900,50]

for (let i=0;i<items_price.length;i++)
{
    items_price[i]=items_price[i]- (items_price[i]*0.1)
}

for(let i of items_price)
{
    console.log(i)
}