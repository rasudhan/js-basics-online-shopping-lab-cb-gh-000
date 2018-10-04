var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var item_object={itemName: [item], itemPrice: Math.floor(1+100*Math.random())}
 cart.push(item_object);
 return `${item} has been added to your cart.`

}

function viewCart() {
  // write your code here
  var items=[]
  for(let i=0;i<cart.length;i++) {
    items.push(cart[i][0]+"at $"+cart[i][1]);
  }
  
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
