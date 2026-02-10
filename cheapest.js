const products = [
  { name: "phone", price: 12000 },
  { name: "laptop", price: 55000 },
  { name: "earphone", price: 2000 }
];
const product = []

function findCheapestProduct(products){
    if(products.length === 0){
        return null;
    }
    let cheapest = products[0]
    for(let product of products){
        if(product.price < cheapest.price){
            cheapest = product;
        }
    }
    return cheapest;
}


const cheapestProduct = findCheapestProduct(products);
console.log(cheapestProduct)