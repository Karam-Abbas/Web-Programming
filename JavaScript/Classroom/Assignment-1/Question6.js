let customer = {
  firstName: "Karam",
  lastName: "Abbas",
  city: "Lahore",
  items: [
    { name: "ghee", price: 500 },
    { name: "sabzi", price: 300 },
    { name: "crockery", price: 2000 },
  ],
};
const calculateTotalPrice = (items) => {
    return items.reduce((prev, item) => {
      // using reduce to calculate the total of cart
      prev += item.price;
      return prev;
    }, 0);
  };


// object destructuring to extract values
// Also used the rest parameter to collect the cart values in it
let { firstName, lastName, city, ...cart } = customer;
console.log(firstName, " ", lastName, " ", city,"",cart);


console.log("Total Price :", calculateTotalPrice(cart.items));// because the rest operator (cart) returns a object containing the items array in it like {items:[]} this 

// the previous rest variable contains the cart array from the customer object, then the first and second item in the cart is stored in teh firstItem and secondItem variable and the rest of the items are stored in the rest variable name remainingItems.

let [ firstItem, secondItem, ...remainingItems ] = cart.items;

console.log(firstItem," ",secondItem," ",remainingItems );
