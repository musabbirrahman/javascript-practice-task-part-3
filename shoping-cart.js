//Calculate total cost 

const cart = [
  { name: "pen", price: 10, quantity: 3 },
  { name: "book", price: 50, quantity: 2 }
];

function calculateTotalPrice(products){
    let total = 0;
    for(let product of products){
      const  perProduct = product.price * product.quantity;
      total = total + perProduct;
    }
    return total;
}
const totalCost = calculateTotalPrice(cart)
console.log(totalCost)