const products = [
    {name: 'oppo phone', price: 12000, quantity: 2},
    {name: 'xiomi phone', price: 12000,quantity: 1},
    {name: 'samsung phone', price: 12000,quantity: 3},
    {name: 'opo ', price: 12000,quantity: 1},
    {name: 'opp ', price: 12000,quantity: 2},
    {name: 'ppo ', price: 12000,quantity: 4},
]


function findAveragePrice(products){
    let total = 0;
    let count = 0;
    for(let product of products){
        total = (product.price * product.quantity) + total;
        count++;
    }
    let average = total / count;
    return average;
}

const averagePrice = findAveragePrice(products);
console.log(averagePrice)