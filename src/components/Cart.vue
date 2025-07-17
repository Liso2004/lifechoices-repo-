<template>
  <div>
    <h1>Your Cart</h1>
    <p v-if="cartItems.length === 0">Your cart is currently empty.</p>
    <ul v-else>
      <li v-for="(item, index) in cartItems" :key="index">
        {{ item.name }} - ${{ item.price }}
        <button @click="removeFromCart(index)">Remove</button>
      </li>
    </ul>
    <button @click="addToCart">Add Sample Item</button>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data() {
    return {
      cartItems: [] // Array to hold cart items
    };
  },
  methods: {
    addToCart() {
      // Sample item to add to the cart
      const newItem = {
        name: 'Sample Item',
        price: 19.99
      };
      this.cartItems.push(newItem); // Add the item to the cart
    },
    removeFromCart(index) {
      this.cartItems.splice(index, 1); // Remove the item from the cart
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

ul {
  list-style-type: none; /* Remove bullet points */
  padding: 0; /* Remove padding */
}

li {
  margin: 10px 0; /* Space between items */
}

button {
  margin-left: 10px; /* Space between item name and button */
  padding: 5px 10px; /* Padding for buttons */
  background-color: #007bff; /* Button background color */
  color: white; /* Button text color */
  border: none; /* Remove border */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
}

button:hover {
  background-color: #0056b3; /* Darker blue on hover */
}
</style>
