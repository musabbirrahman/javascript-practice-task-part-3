const products = [
    {name: 'oppo phone', price: 12000},
    {name: 'xiomi phone', price: 12000},
    {name: 'samsung phone', price: 12000},
    {name: 'opo ', price: 12000},
    {name: 'opp ', price: 12000},
    {name: 'ppo ', price: 12000},
]

function searchePhone(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.includes(search)){
            matched.push(product)
        }
    }
    return matched;
}

const search = searchePhone(products, 'phone');
console.log(search)