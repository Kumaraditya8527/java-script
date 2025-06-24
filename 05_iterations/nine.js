const myNums=[1,2,3]

// const total=myNums.reduce( function (acc,currval) {
//     console.log(`acc:${acc} and currval:${currval}`);
    
//     return acc+currval
// },0)

const total=myNums.reduce((acc,currval)=>acc+currval,0)
console.log(total);

const shoppingCart=[
    {
        itemName:'js course',
        price:999
    },
    {
        itemName:'data science course',
        price:12999
    }
]


const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)

console.log(priceToPay);
